import { renderHook } from '@testing-library/react';

import { useShowOnScrollAnimation } from '../';

describe('useShowOnScrollAnimation', () => {
    it('Should not display the element', () => {
        const { result } = renderHook(() =>
            useShowOnScrollAnimation({
                scrollY: 500,
                scrollYToRender: 600,
            }),
        );

        const [animation, isShown] = result.current;

        expect(animation.opacity.animation.to).toBe(0);
        expect(animation.visibility.animation.to).toBe('hidden');
        expect(animation.pointerEvents.animation.to).toBe('none');

        expect(isShown).toBeFalsy();
    });

    it('Should display the element', () => {
        const { result } = renderHook(() =>
            useShowOnScrollAnimation({
                scrollY: 500,
                scrollYToRender: 400,
            }),
        );

        const [animation, isShown] = result.current;

        expect(animation.opacity.animation.to).toBe(1);
        expect(animation.visibility.animation.to).toBe('visible');
        expect(animation.pointerEvents.animation.to).toBe('auto');

        expect(isShown).toBeTruthy();
    });
});
