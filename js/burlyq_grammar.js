/**
 * @author Halftime
 */

var burlyqGrammar = {

"origin" : [
"#introSentence# #middleSection# #endingSentence.capitalize#",
],

"middleSection" : [
"#optionalTechnicalSentence# #twistSentence#",
"#twistSentence# #optionalTechnicalSentence#"
],

"introSentence" : ["#act.a.capitalize#, set to #music#."],

"act" : [
"#soloAct#",
"#duetAct#",
"#groupAct#",
],

"soloAct" : [
"#optionalActMood#straight strip",
"#optionalActMood#act about #aCharacter#",
],

"duetAct" : [
"#optionalActMood#duet act",
"#optionalActMood#duet act about #twoCharacters#",
],

"groupAct" : [
"#optionalActMood#group act",
"#optionalActMood#group act about some #character.s#",
"#optionalActMood#group act about #aCharacter# and some #character.s#",
],

"aCharacter" : [
"#character.a#"
],

"twoCharacters" : [
"two #character.s#",
"#aCharacter# and #aCharacter#",
"two rival #profession.s#",
"#aCharacter# and their #optionalCharacterAdj#love interest"
],

"manyCharacters" : [
"some #character.s#",
"a group of #character.s#",
"#aCharacter# and some #character.s#"
],

"character" : [
"#optionalCharacterAdj##profession#"
],

"optionalCharacterAdj" : [
"",
"#characterAdj# "
],

"characterAdj": [
"androgynous",
"angsty",
"attention-seeking",
"awkward",
"bashful",
"carefree",
"clueless",
"combative",
"confident",
"desperate",
"domineering",
"excitable",
"feminine",
"frantic",
"goofy",
"graceful",
"heartsick",
"high-strung",
"incompetent",
"kinky",
"laid-back",
"lascivious",
"lewd",
"lonely",
"lovable",
"lustful",
"masculine",
"naive",
"overeager",
"panicky",
"poised",
"prudish",
"sassy",
"seductive",
"self-obsessed",
"sexually adventurous",
"sexually frustrated",
"sexually repressed",
"sexy",
"shameless",
"sinister",
"straitlaced",
"vain",
"wacky",
"wildly inappropriate",
"wretched"
],

"profession" : [
"accountant",
"airline pilot",
"astronaut",
"auto mechanic",
"B-list celebrity",
"babysitter",
"bartender",
"beggar",
"big game hunter",
"business executive",
"barista",
"cartographer",
"cashier",
"celebrity",
"chemist",
"clown",
"construction worker",
"cowboy",
"cryptozoologist",
"D-list celebrity",
"doctor",
"entomologist",
"firefighter",
"gambler",
"gladiator",
"grad student",
"guitarist",
"hairstylist",
"high school gym teacher",
"high school principal",
"inventor",
"lawyer",
"librarian",
"mad scientist",
"mechanic",
"meteorologist",
"mime",
"painter",
"philosopher",
"plumber",
"poet",
"politician",
"preacher",
"priest",
"professional athlete",
"professor",
"pro wrestler",
"nurse",
"reality show contestant",
"sailor",
"scientist",
"secretary",
"starving artist",
"summer camp counselor",
"TV anchor",
],

"optionalActMood" : [
"",
"#actMood# "
],

"actMood" : [
"aggressive",
"allegorical",
"angry",
"bump-n-grindy",
"classy",
"comedic",
"cute",
"dark",
"darkly comedic",
"didactic",
"disturbing",
"dramatic",
"eerie",
"emotionally overwrought",
"enigmatic",
"filthy",
"freewheeling",
"frenetic",
"grotesque",
"haunting",
"heartfelt",
"high-energy",
"juvenile",
"intense",
"irreverent",
"melancholy",
"melodramatic",
"peppy",
"playful",
"political",
"rambunctious",
"raunchy",
"ridiculous",
"risque",
"rowdy",
"satirical",
"scatological",
"schmaltzy",
"seductive",
"silly",
"spooky",
"subversive",
"sultry",
"tragic",
"twisted",
"violent",
"wacky",
"zany",
],

"music" :[
"#[myArtist:#artist#][mySong:#specificSong#]musicInner#",
],

"musicInner" : [
"#genre.a# song",
"#coverType.a# cover of <a href=\"https://www.youtube.com/results?search_query=#mySong#\" target='_blank'>#mySong#</a>",
"<a href=\"https://www.youtube.com/results?search_query=#mySong#\" target='_blank'>#mySong#</a>",
"a song by <a href=\"https://www.youtube.com/results?search_query=#myArtist#\" target='_blank'>#myArtist#</a>",
],

"specificSong" : songArray,
"artist" : artistArray,

"coverType" : [
"a cappella",
"acoustic",
"heavy metal",
"old-timey",
"parody",
"punk",
"slowed-down",
"spoken-word",
"uptempo"
],

"genre" : [
'\'50s',
'\'60s',
'\'70s',
'\'80s',
'\'90s',
'alt-rock',
'black metal',
'bluegrass',
'blues',
'country',
'dance',
'death metal',
'disco',
'dubstep',
'electro',
'folk',
'folk-rock',
'funk',
'gospel',
'grunge',
'hardcore punk',
'heavy metal',
'hip-hop',
'instrumental',
'J-pop',
'jazz',
'K-pop',
'new wave',
'opera',
'pop',
'prog-rock',
'punk rock',
'R&B',
'rap',
'reggae',
'reggaeton',
'rock',
'rock and roll',
'rockabilly',
'ska',
'soul',
'techno',
'trance'
],

"twistSentence" : [
"",
"#timestamp.capitalize#, #twist#."
],

"timestamp" : [
"as soon as the basic concept is established",
"after about a minute",
"halfway through the act",
"partway through the act",
"about a minute from the end",
"just before the end",
"just when the audience thinks they understand what's going on",
"at a suitable moment"
],

"twist" : [
"another performer puts in a cameo appearance as #aCharacter#",
"start #doingATrick#",
"the overall #tone# becomes more #actMood#",
"the track switches to #music#",
"your character becomes more #characterAdj#"
],

"tone" : [
"tone", "mood", "style", "feel", "vibe"
],

"endingSentence" : [
"#end# by breaking the fourth wall and directly addressing any politicians in the audience about the serious problems facing this country today.",
"#end# by taking a selfie of yourself on stage and posting it to #socialMedia#.",
"#end# the act by ascending to godhood.",
"#end# the act by busting out your best dance moves.",
"#end# the act by #doingATrick#.",
"#end# the act by diving into the audience and crowdsurfing to the nearest exit.",
"#end# the act by dying.",
"#end# the act by eating one of your props.",
"#end# the act by giving the audience a pop quiz on what they've just seen.",
"#end# the act by having a personal breakthrough.",
"#end# the act by irrevocably destroying one of your #propOrSetpiece.s#.",
"#end# the act by passing out.",
"#end# the act by pulling a thematically appropriate prop out of your underwear.",
"#end# the act by revealing thematically appropriate pasties.",
"#end# the act by revealing thematically appropriate underwear.",
"#end# the act by silently making intense eye contact with one audience member until the lights go down.",
"#end# the act by striking a dramatic pose.",
"#end# the act drowning in moonlight, strangled by your own bra.",
"#end# the act on an optimistic note.",
"#end# the act sitting in the lap of a (consenting) audience member.",
"End the act so abruptly that the audience is left wondering whether it's actually over.",
"#end# the act wearing as little as you can legally get away with under local ordinances.",
"#end# the act while stroking one of your props suggestively.",
"#end# the act with a bodily fluid of your choice.",
"#end# the act with a dramatic lighting cue.",
"#end# the act with a fart joke.",
"#end# the act with a little gratuitous rear nudity.",
"#end# the act with a moment of existential terror.",
"#end# the act with a poop joke.",
"#end# the act with a simulated orgasm.",
"#end# the act with a teachable moment.",
"#end# the act with an appropriate line of dialogue from a movie.",
"#end# the act with an ironic twist.",
"#end# the act with an outpouring of raw emotion.",
"#end# the act with #aTrick#.",
"#end# the act with implied full-frontal nudity, cleverly hidden behind a #propOrSetpiece#.",
"#end# the act with tears of joy.",
"#end# the act with the revelation that it was all just a dream.",
"#end# with a clever visual pun.",
"#end# with a fade to darkness.",
"#end# with a flourish.",
"#end# with a knowing wink to the audience.",
"#end# with a sudden blackout.",
"#end# with a (literal) bang!",
"#end# with a (metaphorical) bang!",
"#end# with a bang! (Literal or metaphorical, I don't care which.)",
"#end# with an instant of full nudity followed immediately by a blackout.",
"#end# with #ceilingSubstance# raining from the ceiling.",
"#end# with jazz hands!",
"Give your act an ending that guarantees that you'll never be invited back.",
"I don't care how you #end# the act, just make it memorable.",
"The end of your act should flow seamlessly into the start of the next one.",
"The final moment of your act should be unbelievably #actMood#."
],

"end" : [
"end",
"finish"
],

"socialMedia" : [
"Facebook",
"Instagram",
"MySpace",
"Snapchat",
"Twitter"
],

"propOrSetpiece" : [
"prop",
"setpiece"
],

"ceilingSubstance" : [
"balloons",
"confetti",
"electrical sparks",
"fake blood",
"glitter",
"green slime",
"live frogs",
"the fortunes from fortune cookies"
],

"optionalTechnicalSentence" : [
"",
"#technicalSentence#"
],

"technicalSentence" : [
"Be sure to incorporate #aTrick# into your act.",
"#doATrick.capitalize# to really get the audience's attention.",
"#doATrick.capitalize# in a way that is seamlessly integrated into the rest of the piece.",
"Feel free to add in #aTrick# if that seems appropriate.",
"This act is a showcase for your ability to #doATrick##optionallyWhileDoingATrick#.",
"Wow the audience by #doingATrick#.",
"(You can #doATrick#, right?)"
],

"optionallyWhileDoingATrick" : [
"",
" while #doingATrick#"
],

"aTrick" : [
"belly dancing",
"breakdancing",
"dancing en pointe",
"a backbend",
"a backflip",
"a cartwheel",
"a handstand",
"a split",
"eating an impressive quantity of food",
"falling down a flight of stairs",
"a fan dance",
"hula-hooping",
"juggling",
"an aerial silks routine",
"playing the #instrument#",
"removing your underwear without taking off your pants",
"live vocals",
"poi spinning",
"solving a Rubik's cube",
"swinging on a flying trapeze",
"tap dancing"
],

"doATrick" : [
"belly dance",
"breakdance",
"dance en pointe",
"do a backbend",
"do a backflip",
"do a cartwheel",
"do a handstand",
"do a split",
"eat an impressive quantity of food",
"fall down a flight of stairs",
"fan dance",
"hula-hoop",
"juggle",
"perform on aerial silks",
"play the #instrument#",
"remove your underwear without taking off your pants",
"sing live",
"solve a Rubik's cube",
"spin poi",
"swing on a flying trapeze",
"tap dance"
],

"doingATrick" : [
"belly dancing",
"breakdancing",
"dancing en pointe",
"doing a backbend",
"doing a backflip",
"doing a cartwheel",
"doing a handstand",
"doing a split",
"eating an impressive quantity of food",
"falling down a flight of stairs",
"fan dancing",
"hula-hooping",
"juggling",
"performing on aerial silks",
"playing the #instrument#",
"removing your underwear without taking off your pants",
"singing live",
"solving a Rubik's cube",
"spinning poi",
"swinging on a flying trapeze", 
"tap dancing"
],

"instrument" : [
"didgeridoo",
"flute",
"guitar",
"kazoo",
"piano",
"saxophone",
"ukulele",
"violin"
]

}
