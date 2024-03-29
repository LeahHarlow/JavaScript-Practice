//coz we can streamline this

//vars
let recipient = 'Dropbox';
let title = '';
let company = 'Dropbox';
let companyAddress = '';
let position = 'intern';
let reason = '';

let headerBit = `${recipient} \n ${title} \n ${company} \n ${companyAddress}\n ${position}`;

let body = `Dear ${recipient},

My name is Leah Hamilton, and I am a graduate from the Grace Hopper Program at Fullstack Academy. I am writing to you today because I would love to be considered for the ${position} position available at ${company}.

  Prior to becoming a Software Engineer, I was working in the service industry to put myself through my undergraduate degree in Communication from the University of California Santa Barbara. I am very grateful for this time as the service industry allowed me to not only support myself while in school full time and to travel, but also allowed me to gain experience remaining focused in a fast paced and often stressful work environment while maintaining professional, friendly and effective communication. While I will always respect for the service industry and am grateful for what it has provided me, I knew that ultimately I needed something more technically challenging with more room for growth and impact.

  Though I was not a Computer Science major, I gravitated to classes like Internet and Society, Data Science for Arts Majors, Media studies and Physics classes. The itch for STEM was not scratched though and soon after graduating I found myself on Codecademy, Leet Code and playing with WordPress to see what I could create. Now as a Full Stack Engineer I hope to aid and inspire other students intimidated by the barrier to entry. I have begun doing so by contacting my Data Science professor and we are arranging for me to perform some guest presentations and hopefully inspire others who feel they cannot take on programming as an arts major.

  I am interested in ${company} for this same culture of inspiration, support and spirit of giving back. I am impressed by your ${reason} and feel that I can be a great asset to your impact.

  I would love to speak further about the role and answer any questions you have for me at your earliest convenience! Thank you for your time.

  All the best,

  Leah Harlow Ball Hamilton`;

const printIt = () => {
  console.log(headerBit);
  console.log(body);
};

console.log(printIt());
