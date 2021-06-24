// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var img1 = document.getElementById("myImg2");
var img2 = document.getElementById("myImg3");
var img3 = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = "Michael Jeffrey Jordan (born February 17, 1963), also known by his initials MJ, is an American former professional basketball player who is the principal owner of the Charlotte Hornets of the National Basketball Association (NBA). He played 15 seasons in the NBA, winning six championships with the Chicago Bulls. His biography on the official NBA website states: \"By acclamation, Michael Jordan is the greatest basketball player of all time.\" He was integral to the rising global popularity of the NBA in the 1980s and 1990s.Jordan played college basketball for three seasons under coach Dean Smith with the North Carolina Tar Heels. As a freshman, he was a member of the Tar Heels' national championship team in 1982. Jordan joined the Bulls in 1984 as the third overall draft pick, and quickly emerged as a league star, entertaining crowds with his prolific scoring while gaining a reputation as one of the game's best defensive players. Jordan won his first NBA championship with the Bulls in 1991, and followed that achievement with titles in 1992 and 1993, securing a \"three-peat\". Jordan abruptly retired from basketball before the 1993–94 NBA season to play Minor League Baseball, but returned to the Bulls in March 1995 and led them to three more championships in 1996, 1997, and 1998, as well as a then-record 72 regular-season wins in the 1995–96 NBA season. He retired for a second time in January 1999 but returned for two more NBA seasons from 2001 to 2003 as a member of the Washington Wizards."
}
img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = "Kobe Bean Bryant (August 23, 1978 – January 26, 2020) was an American professional basketball player for the Los Angeles Lakers in the National Basketball Association (NBA). As a shooting guard, he entered the league directly from high school, and played his entire 20-season professional career with the Lakers. Bryant won many accolades: five NBA championships, 18-time All-Star, 15-time member of the All-NBA Team, 12-time member of the All-Defensive Team, 2008 NBA Most Valuable Player (MVP), two-time NBA Finals MVP winner. Widely regarded as one of the greatest players of all time, he led the NBA in scoring during two seasons, ranks fourth on the league's all-time regular season scoring and all-time postseason scoring lists.Bryant first played basketball seriously in Italy, where he spent more than seven years as a child after his father, former NBA player Joe Bryant, moved to the country to continue playing professionally. Bryant later attended Lower Merion High School in Pennsylvania, where he was recognized as the top high-school basketball player in the country. Upon graduation, he declared for the 1996 NBA draft and was selected by the Charlotte Hornets with the 13th overall pick; the Hornets then traded him to the Lakers. As a rookie, Bryant earned himself a reputation as a high-flyer and a fan favorite by winning the 1997 Slam Dunk Contest, and he was named an All-Star by his second season. Despite a feud with teammate Shaquille O'Neal, the pair led the Lakers to three consecutive NBA championships from 2000 to 2002, a feat no team since then has accomplished."
}
img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = "Wardell Stephen \"Steph\" Curry II (born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). A six-time NBA All-Star, Curry has been named the NBA Most Valuable Player (MVP) twice and won three NBA championships with the Warriors. Many players and analysts have called him the greatest shooter in NBA history. The son of former NBA player Dell Curry and older brother of current NBA player Seth, Curry played college basketball for the Davidson Wildcats. There, he was twice named Southern Conference Player of the Year and set the all-time scoring record for both Davidson and the Southern Conference. During his sophomore year, Curry also set the single-season NCAA record for three-pointers made, and was then selected by the Warriors with the seventh overall pick in the 2009 NBA Draft.In 2014–15, Curry won his first MVP award and led the Warriors to their first championship since 1975. The following season, he became the first player in NBA history to be elected MVP by a unanimous vote and to lead the league in scoring while shooting above 50–40–90. That same year, the Warriors broke the record for the most wins in an NBA season en route to reaching the 2016 NBA Finals, which they lost to the Cleveland Cavaliers. Curry helped the Warriors return to the NBA Finals in 2017, 2018 and 2019, winning back-to-back titles in 2017 and 2018, before being defeated by the Toronto Raptors in 2019.";
}
img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = "LeBron Raymone James Sr. (born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He is widely considered to be one of the greatest basketball players in NBA history. Discussions ranking him as the greatest basketball player of all time have often been subject to significant debate, with frequent comparisons to Michael Jordan. James's teams have played in eight consecutive NBA Finals (2011–2018 seasons) between the Miami Heat and Cleveland Cavaliers. His accomplishments include three NBA championships, four NBA Most Valuable Player (MVP) Awards, three Finals MVP Awards, and two Olympic gold medals. James holds the all-time record for playoffs points, is third in all-time points, and eighth in all-time assists. James was selected to the All-NBA First Team twelve times (all-time record), made the All-Defensive First Team five times, and has played in sixteen All-Star Games, in which he was selected All-Star MVP three times.James played basketball for St. Vincent–St. Mary High School in his hometown of Akron, Ohio, where he was heavily touted by the national media as a future NBA superstar. A prep-to-pro, he joined Cleveland in 2003 as the first overall draft pick. Named the 2003–04 NBA Rookie of the Year, he soon established himself as one of the league's premier players, winning the NBA MVP Award in 2009 and 2010.";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}