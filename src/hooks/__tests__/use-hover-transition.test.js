import { renderHook, act } from '@testing-library/react';

import { useHoverTransition } from '../';

describe('useHoverTransition', () => {
    describe('Element is displayed on hover - displayOnHover = true', () => {
        it('Does not displays element by default', () => {
            const { result } = renderHook(() => useHoverTransition(true));
            const [fadeTransition] = result.current;

            expect(fadeTransition.opacity.animation.to).toBe(0);
        });

        it('Appears when hovering and disappears when hovering', () => {
            const { result } = renderHook(() => useHoverTransition(true));
            const [fadeTransition, { hoverOn, hoverOff }] = result.current;

            act(() => hoverOn());
            expect(fadeTransition.opacity.animation.to).toBe(1);

            act(() => hoverOff());
            expect(fadeTransition.opacity.animation.to).toBe(0);
        });
    });

    describe('Element is not displayed on hover - displayOnHover = false', () => {
        it('Displays element without hovering', () => {
            const { result } = renderHook(() => useHoverTransition(false));
            const [fadeTransition] = result.current;

            expect(fadeTransition.opacity.animation.to).toBe(1);
        });

        it('Disappears when hovering and appears when not hovering', () => {
            const { result } = renderHook(() => useHoverTransition(false));
            const [fadeTransition, { hoverOn, hoverOff }] = result.current;

            act(() => hoverOn());
            expect(fadeTransition.opacity.animation.to).toBe(0);

            act(() => hoverOff());
            expect(fadeTransition.opacity.animation.to).toBe(1);
        });
    });
});
