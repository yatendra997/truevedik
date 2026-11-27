export function isHindiPath(pathname: string) {
  return pathname === '/hi' || pathname.startsWith('/hi/')
}

export function localizePath(pathname: string, hindi: boolean) {
  const basePath = pathname || '/'
  if (!hindi) return basePath
  if (basePath === '/hi' || basePath.startsWith('/hi/')) return basePath
  return basePath === '/' ? '/hi' : `/hi${basePath}`
}

export function languageSwitchPath(pathname: string) {
  if (!isHindiPath(pathname)) return localizePath(pathname, true)
  const englishPath = pathname.replace(/^\/hi(?=\/|$)/, '')
  return englishPath || '/'
}
