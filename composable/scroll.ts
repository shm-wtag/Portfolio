import { useThrottleFn } from "@vueuse/core";

export function useScrollSnap() {
  const allSections = ["hero", "design", "years", "build", "message", "footer"];

  const currentSection = ref(0);

  onMounted(() => {
    window.scrollBy({
      top: 0,
      behavior: "instant",
    });
    window.addEventListener("wheel", throttledWheel);
  });

  const throttledWheel = useThrottleFn((event: WheelEvent) => {
    event.preventDefault();

    const sign = Math.sign(event.deltaY);
    currentSection.value += sign;

    if (currentSection.value < 0) {
      currentSection.value = 0;
    } else if (currentSection.value >= allSections.length) {
      currentSection.value = allSections.length - 1;
    }

    let bottom = document.getElementById(
      allSections[currentSection.value],
    )?.offsetTop;

    if (bottom) {
      scrollBy({
        top: bottom,
        behavior: "smooth",
      });
    }
  }, 500);
}
