const KEY = "scaleon-signed-in"

export function hasSignedIn() {
  try {
    return localStorage.getItem(KEY) === "1"
  } catch {
    return false
  }
}

export function markSignedIn() {
  try {
    localStorage.setItem(KEY, "1")
  } catch {
    // Private browsing can block storage. The sign-in page still opens.
  }
}
