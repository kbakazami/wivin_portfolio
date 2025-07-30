'use client';

import { motion } from 'motion/react';
import type { ComponentPropsWithoutRef, FC } from 'react';

type AnimatedSectionProps = ComponentPropsWithoutRef<typeof motion.div>;

const AnimatedSection: FC<AnimatedSectionProps> = ({ children, ...props }) => {
    return (
        <motion.section {...props}>
            {children}
        </motion.section>
    );
};

export default AnimatedSection;
