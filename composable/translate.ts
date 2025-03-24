import { inView, animate, stagger } from "motion";

export function translateY(
  element: string,
  y: number | Array<number> = [150, 0],
  opacity: number | Array<number> = 1,
  duration: number = 0.5,
  ease: "linear",
) {
  onMounted(() => {
    inView(element, (ele) => {
      animate(ele, { opacity, y }, { duration, ease });

      return () => animate(ele, { opacity, y }, { duration, ease });
    });
  });
}

export function translateYStagger(ele: string, duration: number = 0.25) {
  onMounted(() => {
    inView(ele, (el) => {
      animate(
        el.querySelectorAll(".a-item"),
        { y: [50, 0], opacity: [0, 1] },
        { delay: stagger(duration), ease: "linear" },
      );

      return () =>
        animate(
          el.querySelectorAll(".a-item"),
          { y: [0, 50], opacity: [1, 0] },
          { delay: stagger(0.45) },
        );
    });
  });
}
