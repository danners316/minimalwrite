//idea

function randomWord2() {


	arrays.forEach(spitword);

	function spitword(arr, index) {	
	
	//index = 0,1,2 
	var arrayLength = arr.length;
	// Pick randon muber from 1 to length
	var rand = Math.random() * arrayLength;
	//Round Up 
	rand = Math.floor(rand);
	//Find that number of the array	and assign that item as word	
	var word = arr[rand];
	// console.log(word);

	}

}

var arrays = [
//Open Arrays
//Acting Verbs 
["man", "girl", "woman", "child", "animal", "boy", "cowards", "holy men", "law", "gentlemen", "women", "men", "law makers", "shadow", "dead", "living", "down trodden", "unholy", "weary", "widow", "priest", "feeling", "sound", "cows", "pigs", "beast", "flowers", "trees"],
// Verbs Past
["sailed", "ran", "saved", "searched", "chilled", "buried", "warned", "looked", "glided", "postured", "shot", "heard", "incited", "pondered", "talked", "sang", "spoke", "waved", "walked", "danced", "grimaced", "enraged", "criminalised", "vanished", "dissapeared", "ruined", "held", "serenaded", "beaten", "healed", "rejoiced", "heralded", "celebrated", "entertained", "incanted", "worshipped", "reborn", "unheard", ""],
// Preposition
["towards", "without", "with", "away from", "in the midst of", "because of", "by", "like", "to", "behind", "in front of", "at the mercy of", "in", "of", "on", "at", "at the might of"]
//Close Arrays
]

randomWord2.apply(this, arrays);

function randomWord() {


//function shuffle() {

const theyNouns = ["men","gravediggers","workers","girls", "women", "children", "animals", "boys", "cowards", "police", "gentlemen", "law makers", "shadows", "dead", "widowed", "priests", "cows", "pigs", "beasts"]
var theyNounsNum = theyNouns.length;
var rand = Math.random() * theyNounsNum;
rand = Math.floor(rand);
var theyNoun = theyNouns[rand];

const heNouns = ["man","gravedigger","barman","patron","child", "animal", "boy", "priest", "coward", "cleric", "policeman", "hero", "villain", "sinner", "bishop", "farmer", "sherif", "gunslinger", "cow", "pig", "beast","brute"]
var heNounsNum = heNouns.length;
var rand = Math.random() * heNounsNum;
rand = Math.floor(rand);
var heNoun = heNouns[rand];

const verbPreps = ["talked of", "girl", "woman", "child", "animal", "boy", "cowards", "holy men", "law", "gentlemen", "women", "men", "law makers", "shadow", "dead", "unholy", "weary", "widow", "priest", "feeling", "sound", "cows", "pigs", "beast"]
var verbPrepsNum = verbPreps.length;
var rand = Math.random() * verbPrepsNum;
rand = Math.floor(rand);
var verbPrep = verbPreps[rand];

const verbFors = ["asked","cried","called","searched","sang", "begged","pleaded"]
var verbsNum = verbFors.length;
var rand= Math.random() * verbsNum;
rand = Math.floor(rand);
var verbFor = verbFors[rand];

const verbOfs = ["knew","thought","told","spoke","warned"]
var verbsNum = verbOfs.length;
var rand= Math.random() * verbsNum;
rand = Math.floor(rand);
var verbOf = verbOfs[rand];

const verbTos = ["ran","hurried","walked","ambled","limped","sauntered","scampered","scurried","staggered","tiptoed","swayed"]
var verbsNum = verbTos.length;
var rand= Math.random() * verbsNum;
rand = Math.floor(rand);
var verbTo = verbTos[rand];

const endVerbs = ["cried","screamed","begged","slept","knelt","prayed","died","wept"]
var verbsNum = endVerbs.length;
var rand= Math.random() * verbsNum;
rand = Math.floor(rand);
var endVerb = endVerbs[rand];

const motionPreps = ["towards","into","to","around","before","across","away from","in the midst of"]
var verbsNum = motionPreps.length;
var rand= Math.random() * verbsNum;
rand = Math.floor(rand);
var motionPrep = motionPreps[rand];

const toNouns = ["sea", "fire", "smoke", "danger","trouble","gunmen","battle","tyrants","horsemen","thieves","dead","witches","gentry","beggars","field","farm","forest","trees","beach","funeral","road", "parade"]
var toNounsNum = toNouns.length;
var rand = Math.random() * toNounsNum;
rand = Math.floor(rand);
var toNoun = toNouns[rand];

const soloVerbs = ["used","wanted","found","needed","took","touched","knew","buried","worshipped", "serenaded","celebrated","acquired","admired","appreciated","attracted","avoided","believed","criticised","investigated","justified", "left","lost","craved"]
var verbsNum = soloVerbs.length;
var rand= Math.random() * verbsNum;
rand = Math.floor(rand);
var soloVerb = soloVerbs[rand];

const adjs = ["courageous", "colorful", "burdened", "enraged", "brutal", "clumsy", "bitter", "arrogant", "ashamed", "amiable", "dead", "lonely", "sly","cruel","gentle","filthy","deceitful","depraved","determined","distraught","elegant","drab","foolish","grieving","handsome","helpless","helpful","high","hollow","hungry","jealous","jolly","joyous","pompous","pleasant","petty","oblivious","odd","obedient","nutty","nervous","naughty","mortified","muddy","mistaken","perplexed","perfect","nonchalant","mysterious","moody","minute","kind","lazy","lively","livid","loose","lucky","macho","magnificient","melancholy","melted","precious","jumpy","kind","maniacal","moody","mortified","motionless","nasty","nonsensical","odd","old-fashioned","outrageous","panicky","prickly","proud","puny","quaint","quizzical","ratty","reassured","relieved","repulsive","robust","rotten","rotund","rough","sarcastic","selfish","shaggy","shaky","shallow","sharp","short","silly","skinny","slimy","slippery","small","smiling","smooth","smug","solid","sore","sour","splendid","spotless","square","stale","steady","straight","strange","strong","stunning","successful","superficial","superior","swanky","tender","tense","terrible","testy","thankful","thick","thoughtful","thoughtless","tricky","trite","troubled","unsightly","upset","uptight","vexed","victorious","virtuous","vivacious","vivid","wacky","weary","whimsical","wicked","witty","wobbly","wonderful","worried","zany","zealous","zippy","heavy", "silent", "still", "raging", "deathly", "muted", "warm", "cold", "red", "green", "blue", "grey", "white", "black", "feared", "thunderous", "grave", "wet", "sombre", "happy", "modest", "charming", "nervous", "dreadful"]
var adjsnum = adjs.length;
var rand = Math.random() * adjsnum;
rand = Math.floor(rand);
var adj = adjs[rand];

const nounsActeds = ["knowledge", "idea", "question", "silence", "truth", "rhythm", "damage", "sea", "council", "land", "tribe", "sea", "rivalry", "crooks", "angels", "tyrants", "kings", "lunatics", "apostles", "followers", "gypsies", "bridge"]
var nounsActedsNum = nounsActeds.length;
var rand = Math.random() * nounsActedsNum;
rand = Math.floor(rand);
var nounsActed = nounsActeds[rand];

const forNouns = ["forgiveness","mercy","strength","bravery","cowardice","forgiveness","desire","shame","rebellion","retribution","brutality","water","money","wealth","food","honor","loyalty"]
var forNounsNum = forNouns.length;
var rand = Math.random() * forNounsNum;
rand = Math.floor(rand);
var forNoun = forNouns[rand];

const blankNouns = ["dust", "colour", "spite", "anger", "wealth", "mist", "smoke", "fog", "sand", "day", "night", "expectation", "fear", "divinity", "birth", "smell", "breath", "feeling", "sound", "life", "tree", "forest", "wood",  "bird", "beast","situation", "response", "future", "past", "dream", "problem", "victim", "mess", "roar", "question"]
var blankNounsNum = blankNouns.length;
var rand = Math.random() * blankNounsNum;
rand = Math.floor(rand);
var blankNoun = blankNouns[rand];

const seeNouns = ["dust", "mist", "smoke", "fog", "wind", "rain"]
var seeNounsNum = seeNouns.length;
var rand = Math.random() * seeNounsNum;
rand = Math.floor(rand);
var seeNoun = seeNouns[rand];

const seeAdjs = ["thick","heavy","feint","abundant","raging","problematic","violent","fierce","worrying"]
var seeAdjsNum = seeAdjs.length;
var rand = Math.random() * seeAdjsNum;
rand = Math.floor(rand);
var seeAdj = seeAdjs[rand];

const timeNouns = ["day", "night", "fire", "darkness", "light"]
var timeNounsNum = timeNouns.length;
var rand = Math.random() * timeNounsNum;
rand = Math.floor(rand);
var timeNoun = timeNouns[rand];

const timeAdjs = ["fading","silent","quiet","waning","calm","beautiful","alive","peaceful","splendid"]
var timeAdjsNum = timeAdjs.length;
var rand = Math.random() * timeAdjsNum;
rand = Math.floor(rand);
var timeAdj = timeAdjs[rand];

const conjs = ["and","until they","before they","then"]
var conjsNum = conjs.length;
var rand = Math.random() * conjsNum;
rand = Math.floor(rand);
var conj = conjs[rand];

const NauticalActors = ["The sailors","The Pirates","The fishermen","The beggars","The crooks","The thieves","The angels","The monks", "The clergymen", "The men", "The Norsemen", "The Vikings", "The settlers", "The thieves", "The wanderers", "The conquerors", "The invaders"]
var NauticalActorsNum = NauticalActors.length;
var rand = Math.random() * NauticalActorsNum;
rand = Math.floor(rand);
var NauticalActor = NauticalActors[rand];

const NauticalVerbs = ["sailed towards the","approached the","dropped anchor and gazed at the","drowned before the","began to sink as they approached the","wearily approached the","left the","set sail from the", "cried as the boat drfited close to the", "looked up as the boat neared the"]
var NauticalVerbsNum = NauticalVerbs.length;
var rand = Math.random() * NauticalVerbsNum;
rand = Math.floor(rand);
var NauticalVerb = NauticalVerbs[rand];

const NauticalNouns = ["lighthouse","castle","port","beach","coast","bay","island"]
var NauticalNounsNum = NauticalNouns.length;
var rand = Math.random() * NauticalNounsNum;
rand = Math.floor(rand);
var NauticalNoun = NauticalNouns[rand];

const NauticalStances = ['With cold eyes of','With a furrowed brow and',"With bowed head and","With a raised chin and","With stooped shoulders that told of","With weary eyes and"]
var NauticalStancesNum = NauticalStances.length;
var rand = Math.random() * NauticalStancesNum;
rand = Math.floor(rand);
var NauticalStance = NauticalStances[rand];

const NauticalEmotions = ["dissapointment","regret","longing","resilience","fear","greed","sadness","guilt"]
var NauticalEmotionsNum = NauticalEmotions.length;
var rand = Math.random() * NauticalEmotionsNum;
rand = Math.floor(rand);
var NauticalEmotion = NauticalEmotions[rand];

const NauticalEndings = ["they each relinqueshed their grip on their weapon","they resigned themselves to their fate","they readied themselves","they drew up their weapons","they advanced","they held the silence","they listened to the water lapping against the boat","they listened to the cries of the oystercatcher", "they cursed their fate", "they drew a last breath"]
var NauticalEndingsNum = NauticalEndings.length;
var rand = Math.random() * NauticalEndingsNum;
rand = Math.floor(rand);
var NauticalEnding = NauticalEndings[rand];

const NauticalAdditions = ["death revealed himself then, and he smiled.","they had no more fight in their bones.","as the began to fall the grey clouds fell away","what was it worth  said one to the other","a steady rain began to fall and the sky opened up as they watched on","the sound of a thud came as the first fell","they had not eaten it seemed in weeks"]
var NauticalAdditionsNum = NauticalAdditions.length;
var rand = Math.random() * NauticalAdditionsNum;
rand = Math.floor(rand);
var NauticalAddition = NauticalAdditions[rand];

const articles = ["a", "the"]
var articlesNum = articles.length;
var rand = Math.random() * articlesNum;
rand = Math.floor(rand);
var article = articles[rand];

const subjectHes = ["bounty hunter","man","bearded man","sullen man","young boy","beggar","sinner", "dead man","gravedigger","tall figure","slim figure","ghostly figure","skeletal figure","haggard figure","drunk","dying man"]
var subjectHesNum = subjectHes.length;
var rand = Math.random() * subjectHesNum;
rand = Math.floor(rand);
var subjectHe = subjectHes[rand];

const verbs = ["walked", "made his way", "staggered"]
var verbsNum = verbs.length;
var rand = Math.random() * verbsNum;
rand = Math.floor(rand);
var verb = verbs[rand];

const prepositions = ["into"]
var prepositionsNum = prepositions.length;
var rand = Math.random() * prepositionsNum;
rand = Math.floor(rand);
var preposition = prepositions[rand];

const toObjects = ["church","bar","funeral parlor","wake","crowded place","market","graveyard","grey room","cold room","dark room","cathedral","holy place"]
var toObjectsNum = toObjects.length;
var rand = Math.random() * toObjectsNum;
rand = Math.floor(rand);
var toObject = toObjects[rand];

const conjunctions = ["and"]
var conjunctionsNum = conjunctions.length;
var rand = Math.random() * conjunctionsNum;
rand = Math.floor(rand);
var conjunction = conjunctions[rand];

const endActions = ["lit a cigarette","observed the silence there","gestured to the priest","gazed at the tall figure before him","glanced around at his company","threw his shadow out before the masses","wept in it's emptiness","lit a candle for the dead","knelt out of respect for the dead","took out his hip flask and drank","removed his hands from his coat pockets","removed his shoes and socks","sat beside the old woman","thought of death","shivered from the cold","thought of the loneliness around him","drew his weapon","readied his blade"]
var endActionsNum = endActions.length;
var rand = Math.random() * endActionsNum;
rand = Math.floor(rand);
var endAction = endActions[rand];

const questions = ["Is it always this","Why are you so"]
var questionsNum = questions.length;
var rand = Math.random() * questionsNum;
rand = Math.floor(rand);
var question = questions[rand];

const vibes = ["dark","lonesome","quiet", "silent","serene","weird"]
var vibesNum = vibes.length;
var rand = Math.random() * vibesNum;
rand = Math.floor(rand);
var vibe = vibes[rand];

const objectHaves = ["are you not dead yet","have you a shilling","have you a penny","have you a bit of food","say a prayer for me","have you a good prayer for me","has your time come","have you the time","how long has it been"]
var objectHavesNum = objectHaves.length;
var rand = Math.random() * objectHavesNum;
rand = Math.floor(rand);
var objectHave = objectHaves[rand];

const pronouns = ["he"]
var pronounsNum = pronouns.length;
var rand = Math.random() * pronounsNum;
rand = Math.floor(rand);
var pronoun = pronouns[rand];

const verbQuestions = ["asked","said"]
var verbQuestionsNum = verbQuestions.length;
var rand = Math.random() * verbQuestionsNum;
rand = Math.floor(rand);
var verbQuestion = verbQuestions[rand];

const cigaretteEnds = ["as his smoke rose", "as he inhaled", "as he exhaled", "as he pulled on the cigarette", "as the light from cigarette drew on the darkness", "as he blessed himself"]
var cigaretteEndsNum = cigaretteEnds.length;
var rand = Math.random() * cigaretteEndsNum;
rand = Math.floor(rand);
var cigaretteEnd = cigaretteEnds[rand];

const bladeEnds = ["it's shiny surface reflected the evil inside him", "in it's silver tongue he saw evil", "he looked at the reflection of the dead man", "he wiped it clean with the inside of his jacket", "it shivered in his hand", "he blessed himself with its sharpened end"]
var bladeEndsNum = bladeEnds.length;
var rand = Math.random() * bladeEndsNum;
rand = Math.floor(rand);
var bladeEnd = bladeEnds[rand];

const deathEnds = ["it's ragged clothes, it's crusty beard. it continued to follow him", "in it's hollow footsteps he heard something", "it folowed him still", "would it grow tired", "it's restless hum and the loud breathing of it haunting his every step.", "he knew it was near"]
var deathEndsNum = deathEnds.length;
var rand = Math.random() * deathEndsNum;
rand = Math.floor(rand);
var deathEnd = deathEnds[rand];

const companyEnds = ["dead eyes and  sombre mouths on each of them he looked away and towards the floor","they stood before him each holding a shotgun pointing at his temple","one of them came forth and ushered a bouquet of flowers towards his face","the hunched figure in the middle of them was dead he could see","there was only one woman in there midst and tears formed in her eyes","he could see that most were living","there was no children amongst","they each held a haunting smile","they looked like shadows with cavernous eyes in the dim light"]
var companyEndsNum = companyEnds.length;
var rand = Math.random() * companyEndsNum;
rand = Math.floor(rand);
var companyEnd = companyEnds[rand];

const eyesDescs = ["brilliant", "deep", "caverous", "hollow", "awful", "sinful", "narrow", "wretched", "darkened", "shiny", "bright", "muddy"]
var eyesDescsNum = eyesDescs.length;
var rand = Math.random() * eyesDescsNum;
rand = Math.floor(rand);
var eyesDesc = eyesDescs[rand];

const eyesColors = ["blue", "grey", "black", "green", "brown", "red"] 
var eyesColorsNum = eyesColors.length;
var rand = Math.random() * eyesColorsNum;
rand = Math.floor(rand);
var eyesColor = eyesColors[rand];

var sentence10 = article + " " + subjectHe + " " + verb + " " +  preposition + " " +  article + " " +  toObject + " " +  conjunction + " " +  endAction + ". ";

if (endAction === "sat beside the old woman" || endAction === "gestured to the priest"){

	var sentence20 = objectHave + ", " + pronoun + " " + verbQuestion + ". ";

}

else if (endAction === "lit a cigarette" || endAction === "lit a candle for the dead"){

	var sentence20 = question + " " + vibe + ", " + pronoun + " " + verbQuestion + ", " + cigaretteEnd + ". ";

}

else if (endAction === "readied his blade"){

	var sentence20 = question + " " + vibe + ", " + pronoun + " said. " + bladeEnd + ". ";

}

else if (endAction === "thought of death"){

	var sentence20 = question + " " + vibe + ", " + pronoun + " said. " + deathEnd + ". ";

}

else if (endAction === "glanced around at his company")

{

	var sentence20 = question + " " + vibe + ", " + pronoun + " said. " + companyEnd + ". ";

  
}

else if (endAction === "gazed at the tall figure before him" || endAction === "observed the silence there" || endAction === "glanced around at his company" || endAction === "shivered from the cold"){

	var sentence20 = "he had " + eyesDesc + " " + eyesColor + " eyes."

}


else

{
	var sentence20 = " ";
}




//}


if ( NauticalEnding === "they each relinqueshed their grip on their weapon" || NauticalEnding === "they resigned themselves to their fate" || NauticalEnding === "they drew a last breath" || NauticalEnding === "they drew up their weapons"){

	var sentence9 = NauticalStance + " " + NauticalEmotion + " " + NauticalEnding + ". " + NauticalAddition;
}


var sentence1 = "The " + theyNoun + " " + verbFor + " for " + forNoun + ". They " + verbTo + " " + motionPrep + " the " + toNoun + " " + conj + " " + endVerb + ".";
var sentence2 = "The " + heNoun + " " + verbTo + " " + motionPrep + " the " + toNoun + "." 
var sentence3 = "The " + theyNoun + " " + soloVerb + " the " + nounsActed + ".";
var sentence4 = "The " + theyNoun + " " + verbOf + " of the " + toNoun + ".";
var sentence5 = "The " + theyNoun + " " + verbFor + " for " + forNoun + ". They " + verbTo + " " + motionPrep + " the " + toNoun;
var sentence6 = NauticalActor + " " + NauticalVerb + " " + NauticalNoun + ". " + NauticalStance + " " + NauticalEmotion + " " + NauticalEnding + ".";
var sentence7 = "The " + heNoun + " " + verbTo + " " + motionPrep + " the " + toNoun + "." ;
var sentence8 = "He " + soloVerb + " the " + nounsActed + " and he " + endVerb + ".";
var sentence9 = NauticalStance + " " + NauticalEmotion + " " + NauticalEnding + ".";
var sentence11 = sentence10 + sentence20; 



var sentences = [sentence1, sentence3, sentence4, sentence2, sentence5, sentence6, sentence7, sentence8, sentence9, sentence11]
var sentencesnum = sentences.length;
var rand = Math.random() * sentencesnum;
rand = Math.floor(rand);
console.log(rand + 1);
var sentence = sentences[rand];
//var sentence = sentence2;



$("textarea").attr("placeholder",sentence);


//

//var titlePlace2 = "A " + adj + " " + blankNoun;
var titlePlace = "The " + adj + " " + theyNoun;

$(".title input").attr("placeholder",titlePlace);

//$(".dektop_title").text(sentence);

}

randomWord();

$('#bulb_change').click(function(){

randomWord();

});