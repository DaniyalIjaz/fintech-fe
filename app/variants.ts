// motionVariants.ts

// 1. Fade In with Direction
type Direction = 'up' | 'down' | 'left' | 'right';

export const fadeIn = (direction: Direction, delay: number = 0.1) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75] as [number, number, number, number],
            },
        },
    };
};

// 2. Scale and Fade In
export const scaleFadeIn = (delay: number = 0.1) => {
    return {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                delay,
                type: 'spring',
                stiffness: 200,
                damping: 20,
            },
        },
    };
};

// 3. Rotate and Slide In
export const rotateSlideIn = (direction: Direction = 'up', delay: number = 0.1) => {
    let x = 0;
    let y = 0;
    if (direction === 'left') x = -100;
    if (direction === 'right') x = 100;
    if (direction === 'up') y = -100;
    if (direction === 'down') y = 100;

    return {
        hidden: { opacity: 0, x, y, rotate: -10 },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            transition: {
                delay,
                type: 'spring',
                stiffness: 150,
                damping: 15,
            },
        },
    };
};

// 4. Bounce In
export const bounceIn = (delay: number = 0.1) => {
    return {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay,
                type: 'spring',
                stiffness: 500,
                damping: 10,
            },
        },
    };
};

// 5. Staggered Container for Multiple Elements
export const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// Child fade-in for staggered animation
export const fadeInChild = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
