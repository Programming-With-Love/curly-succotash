declare module '*asyncLoad.js' {
  export function loadScript(
    src: string,
    fn?: (err: Error | null, node?: HTMLScriptElement) => void
  ): Promise<(err: Error | null, node?: HTMLScriptElement) => void>

  export function loadCss(
    src: string,
    fn?: (err: Error | null, node?: HTMLLinkElement) => void
  ): Promise<(err: Error | null, node?: HTMLLinkElement) => void>
}
