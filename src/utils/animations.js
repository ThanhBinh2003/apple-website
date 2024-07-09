export const animateWithGsapTimeLine = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarge,
  animationProps,
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );

  timeline.to(
    secondTarge,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );
};
