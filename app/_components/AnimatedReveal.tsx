'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    delay?: number;
}

export default function AnimatedReveal({ children, delay = 0 }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
}
