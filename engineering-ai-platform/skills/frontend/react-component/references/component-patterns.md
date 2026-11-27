# React Component Patterns

## Props & Composition

- Extend native HTML element attributes when wrapping primitives (`React.ComponentPropsWithoutRef<'button'>`).
- Prefer composition (`children`, slot props) over boolean prop explosion.
- Forward refs or accept `ref` as a prop (React 19+) on interactive primitives.

## State & Effects

- Compute derived values inline during render.
- Keep `useEffect` strictly for synchronizing with external systems (DOM APIs, subscriptions).
