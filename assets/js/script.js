const linksSocialMedia = {
  github: 'AJuliaSouza',
  facebook: 'ajuliavsouza',
  instagram: 'anajuliav.souza'
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userLogin.textContent = data.login
    userImage.src = data.avatar_url
  })
}

getGitHubProfileInfos()

function flipCard() {
  const arrows = document.getElementsByClassName('arrow');

  for (const arrow of arrows) {
    arrow.addEventListener('click', () => {
      document.querySelector('.flipCardInner').classList.toggle('flip');
    })
  }
}

flipCard()