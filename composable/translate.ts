import { inView, animate } from "motion";

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
