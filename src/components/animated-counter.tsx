
'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    to: number;
    speed?: number;
}

export function AnimatedCounter({ to, speed = 2000 }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = to;
                    if (start === end) return;

                    const duration = speed;
                    const startTime = Date.now();

                    const step = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);
                        const currentCount = Math.floor(progress * end);
                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        }
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [to, speed]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            {count.toLocaleString()}+
        </div>
    );
}
