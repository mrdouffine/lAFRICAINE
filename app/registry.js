'use client'

import { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

// Rend les styles <style jsx> dans le HTML serveur pour que les pages
// s'affichent correctement avant le chargement du JavaScript.
export default function StyledJsxRegistry({ children }) {
    const [jsxStyleRegistry] = useState(() => createStyleRegistry())

    useServerInsertedHTML(() => {
        const styles = jsxStyleRegistry.styles()
        jsxStyleRegistry.flush()
        return <>{styles}</>
    })

    return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}
