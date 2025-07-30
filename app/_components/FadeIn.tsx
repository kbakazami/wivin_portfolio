'use client'
import { motion } from "framer-motion"
import React from "react"

interface Props {
    children: React.ReactNode
    delay?: number
}

const FadeIn = ({ children, delay = 0 }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn