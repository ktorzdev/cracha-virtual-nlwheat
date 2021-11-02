const userSocialMediaLinks = {
  github: 'ktorzdev',
  youtube: 'maykbrito',
  instagram: '_alanr14',
  twitter: 'maykbrito',
  facebook: 'alan.robsonsantoslopes.9'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMediaLinks[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userAvatar.src = data.avatar_url
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
