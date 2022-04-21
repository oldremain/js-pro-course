type AnimationProperties = {
    [key: string]: number;
};

type AnimationType = {
    [key: string]: AnimationProperties;
};

const animation: AnimationType = {
    animateFrom: { opacity: 0, y: -40 },
    animateTo: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.2 },
};

export default animation;
