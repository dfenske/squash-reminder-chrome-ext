/**
 * This script is loaded on the onHistoryStateUpdated event.
 */

;(function () {
  const message = `Did you squash your commits??`
  const buttonsClass = '.btn-group-merge'
  const buttonsList = [...document.querySelectorAll(buttonsClass)]

  const isPullRequestPage = window.location.pathname.includes('/pull/')
  const hasButtons = buttonsList.length

  if (isPullRequestPage && hasButtons) {
    const btn = buttonsList
      .reduce((btn) => btn.innerText.trim() === "Merge pull request" ? btn : undefined);
    if (btn) {
      btn.onclick = () => window.alert(message);
    }
  }
})()
