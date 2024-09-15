game_scripts = {
    "default": {
        "START": [  // Player will get a randomised script for default gameplay
            [
                "Good evening, listeners.",
                // TODO: (Low) change the DJ name to placeholder so users can choose their own name
                "This is DJ Reverie, coming to you live.",
                "I wish I could say it’s business as usual, but we all know what’s coming.",
                "Tonight isn’t just another show—this could be our last together.",
                "So, let’s make it count.",
                "Call in, share your thoughts, your feelings, or just sit back and listen.",
                "This moment, right here, is ours.",
                "Let’s fill it with music and conversation, whatever you need to get through the end.",
                "Here's our first song..."
            ],
            [
                "Hey, everyone. It’s DJ Reverie, and this is it—the last show.",
                "I’ve been sitting here trying to figure out what to say, but the truth is, there’s no right way to do this.",
                "The world’s about to change forever, and none of us can stop it.",
                "So, I’m here with you until the very end.",
                "If you want to talk, I’m listening.",
                "Let’s face this together.",
                "Let’s start the night with something that feels right for this moment.",
                "Here’s a track that’s always made me pause and think.",
                "I hope it does the same for you.",
                "Let’s take a deep breath and listen."
            ],
            [
                "Hello, listeners. It’s DJ Reverie, and tonight is like no other night we’ve ever shared.",
                "You’ve all heard the news by now—what’s coming can’t be stopped.",
                "But until it does, we’re here together.",
                "If you need a voice to hear, a song to play...",
                "... or just someone to tell you it’s all going to be okay for a little while longer, I’m right here.",
                "Let’s fill this night with something real.",
                "Let’s make the most of these last moments.",
                "Before we dive into our calls, let’s take a moment for the music.",
                "This track has a way of speaking to the quiet moments in life.",
                "Close your eyes, breathe it in—this is for all of us."
            ],
            [
                "Good evening, dear listeners. This is DJ Reverie, and tonight, the world holds its breath.",
                "The air is thick with the quiet before the storm, and we all know what’s coming.",
                "But in this moment, we’re still here.",
                "So let’s fill this space with sound, with words, with memories.",
                "We’ve been through a lot together, haven’t we?",
                "Here’s a song that brings back memories, the kind you hold onto when everything else is slipping away.",
                "Let’s listen and remember the good times."
            ]
        ],
    },

    // Accessible throughout the game
    "SKIPPING_SONGS": [
        ["Music can wait—this moment’s about connection. [Caller_Name], thanks for your patience. What would you like to share?"],
        ["We’ll save that track for later. Right now, we’ve got [Caller_Name] on the line. What’s your story tonight?"],
        ["Sometimes words are louder than music. Let’s see who’s on the line. [Caller_Name], welcome to the show—what’s on your heart?"],
        ["We’ll get back to the music in a bit. For now, let’s see what [Caller_Name] has to say. You’re live on air—what’s been on your mind?"],
        ["Let’s pause the playlist for now and get to the next caller. [Caller_Name], you’re up—what’s on your mind tonight?"]
    ],
    "ACCEPTING_CALLERS": [
        ["Alright, let’s hear from one of our listeners now. Looks like we’ve got [Caller_Name] on the line. What’s on your mind tonight?"],
        ["Next up, we have [Caller_Name] on the line. Don’t worry, you’ve got the floor. What’s going through your head right now?"],
        ["[Caller_Name], thanks for calling in. These are strange times. Tell us, what’s been on your mind with everything happening?"],
        ["[Caller_Name], thanks for hanging on the line. What’s going through your mind? Share with us, we’re all ears"]
    ],
    "PLAY_NEXT_SONG": [
        [
            "Let’s keep things rolling with a track that’s been sitting with me all night.",
            "Sometimes music says what words can’t, and I think this one might just hit the right notes.",
            "Let’s listen together."
        ],
        [
            "Alright, listeners, let’s slow it down a bit.",
            "This next song feels like a warm embrace, the kind of track that makes you forget, even if just for a little while.",
            "Let’s drift into it."
        ],
        [
            "Sometimes, a song can hold both sadness and hope in the same breath.",
            "This next one’s like that.",
            "It’s got a bit of a bittersweet feel, but maybe that’s what we need right now.",
            "Let’s take a moment and let it play."
        ]
    ],

    "SECOND_SONG": [
        [
            "I want to take a moment to say thank you—to every one of you out there listening tonight.",
            "It’s strange, knowing this could be the last time I’ll ever say those words, but I’m grateful.",
            "Grateful we could share these final moments together."
        ],
        [
            "To everyone who tuned in tonight—thank you.",
            "I’ve spent a lot of nights behind this mic, but tonight feels different, doesn’t it?",
            "It means more than ever that you’re here with me, listening until the very end."
        ],
        [
            "Thank you to all of you out there who’ve stuck with me tonight.",
            "It’s been a ride, hasn’t it?",
            "I don’t have much left to say, except that I’m grateful.",
            "Grateful to share this with you, even now."
        ]
    ],

    "THIRD_SONG": [
        [
            "From the bottom of my heart—thank you.",
            "You’ve made this last broadcast something special, something I’ll never forget.",
            "Even if the world’s ending, I’m glad we had this time together."
        ],
        [
            "To everyone still out there, still listening—thank you.",
            "It’s been an honor to share this final broadcast with you.",
            "These moments, these songs, these calls—they mean more than words can say.",
            "Thank you for being here."
        ],
        [
            "Thank you to everyone who tuned in tonight.",
            "In a world full of chaos, you’ve made these final moments feel a little less lonely.",
            "I’ll carry that with me, and I hope you will, too."
        ]
    ],

    "PLAY_LAST_SONG": [
        [
            "As the night closes, so does this show.",
            "Shall we play one last song?",
            "..."
        ],
        [
            "I don’t have much left to say.",
            "Perhaps one last song can speak for what I feel.",
            "..."
        ],
        [
            "We’ve been through a lot together, haven’t we?",
            "We deserve one last song to share together, right?",
            "..."
        ]

    ]
}

call_stories = [

    // NORMAL CALLERS
    {
        "call-id": 1,
        "caller": "Lost Teenager",
        "call": "<em>Confused and scared</em><br />\"Hey, um… I don’t know what to do. Everyone’s freaking out, and I just… I don’t understand. Why is this happening?\"",
        "options": [
            {"type": "honest", "response": "No one really knows. It’s just something we can’t control."},
            {"type": "practical", "response": "Focus on what you can do—spend time with those who matter."},
            {"type": "empathetic", "response": "I get it. It’s overwhelming. Just take a breath and let yourself feel it."}
        ],
        "honest-response": [
            "<em>Frustrated and dismissive</em><br />\"So, that’s it? No one knows? That doesn’t help at all.\"",
            "<em>Resigned</em><br />\"Yeah, I guess that’s just how it is… thanks for being straight with me.\""
        ],
        "practical-response": [
            "<em>Skeptical</em><br />\"Spend time with people? What’s the point when everything’s falling apart?\"",
            "<em>Appreciative</em><br />\"You’re right. I’ll make the most of the time I have with them.\""
        ],
        "empathetic-response": [
            "<em>Dismissive</em><br />\"Yeah, a breath isn’t going to change anything. This is too much.\"",
            "<em>Comforted</em><br />\"Yeah, maybe it’s okay to just let myself feel it. Thanks for saying that.\""
        ]
    },
    {
        "call-id": 2,
        "caller": "Lonely Elderly Man",
        "call": "<em>Tired and wistful</em><br />\"I’ve lived a long life, but I didn’t think it would end like this. Do you think it was all worth it?\"",
        "options": [
            {"type": "honest", "response": "Only you can answer that. What do you think?"},
            {"type": "practical", "response": "Think of the people you’ve touched in your life. That’s what matters."},
            {"type": "empathetic", "response": "It’s hard, I know. But maybe it was. Maybe it all meant something."}
        ],
        "honest-response": [
            "<em>Sad and resigned</em><br />\"I don’t know. I thought you’d give me a real answer, not just push it back on me.\"",
            "<em>Reflective</em><br />\"Maybe you’re right. I guess only I can really know.\""
        ],
        "practical-response": [
            "<em>Hopeless</em><br />\"People I’ve touched? None of them are around now. It feels empty.\"",
            "<em>Content</em><br />\"You’re right. I’ve lived long enough to know I made a difference.\""
        ],
        "empathetic-response": [
            "<em>Uncertain</em><br />\"Maybe it did mean something. But what if it didn’t? What if it was all for nothing?\"",
            "<em>Moved</em><br />\"Yeah… maybe it did mean something after all. Thanks for that.\""
        ]
    },
    {
        "call-id": 3,
        "caller": "Disillusioned Scientist",
        "call": "<em>Frustrated and bitter</em><br />\"We saw this coming, but no one listened. Do you think any of it mattered? All the warnings, the research—it feels like a waste.\"",
        "options": [
            {"type": "honest", "response": "I don’t know. Sometimes people just can’t face the truth."},
            {"type": "practical", "response": "You did what you could. At least you tried to make a difference."},
            {"type": "empathetic", "response": "It must feel awful to see everything you worked for ignored."}
        ],
        "honest-response": [
            "<em>Bitter</em><br />\"So people are just too weak to handle it? Great. That’s not what I wanted to hear.\"",
            "<em>Accepting</em><br />\"Yeah… I guess people weren’t ready for the truth. Thanks.\""
        ],
        "practical-response": [
            "<em>Disillusioned</em><br />\"Tried to make a difference? Feels like it was for nothing, honestly.\"",
            "<em>Relieved</em><br />\"Thanks. At least I know I did everything I could.\""
        ],
        "empathetic-response": [
            "<em>Resentful</em><br />\"Yeah, it does feel awful. I gave everything, and for what?\"",
            "<em>Understood</em><br />\"Thanks for saying that. It means a lot to hear someone understands.\""
        ]
    },
    {
        "call-id": 4,
        "caller": "Hopeful Romantic",
        "call": "<em>Optimistic, trying to hold on</em><br />\"I know things are ending, but… do you think love still matters now? Can we still find beauty in it?\"",
        "options": [
            {"type": "honest", "response": "Yes, love matters. It always does, even now."},
            {"type": "practical", "response": "If you love someone, tell them. There’s no time to waste."},
            {"type": "empathetic", "response": "It’s the one thing that might still make sense. Hold on to that."}
        ],
        "honest-response": [
            "<em>Defeated</em><br />\"I don’t even know anymore. Love feels pointless when there’s no future.\"",
            "<em>Hopeful</em><br />\"Yeah, maybe love is the only thing that matters now. Thank you.\""
        ],
        "practical-response": [
            "<em>Skeptical</em><br />\"Tell them now? What’s the point when we’re all going to die anyway?\"",
            "<em>Determined</em><br />\"You’re right. I’m going to tell them. There’s no time to waste.\""
        ],
        "empathetic-response": [
            "<em>Uncertain</em><br />\"I don’t know… Maybe it’s too late for love to matter.\"",
            "<em>Comforted</em><br />\"Yeah, maybe love is the one thing that still makes sense. Thanks.\""
        ]
    },
    {
        "call-id": 5,
        "caller": "Panic-Stricken Student",
        "call": "<em>Panicked and overwhelmed</em><br />\"I was supposed to graduate! What’s the point of all my hard work if it all just ends?\"",
        "options": [
            {"type": "honest", "response": "Life’s never guaranteed, but your hard work still mattered."},
            {"type": "practical", "response": "Think of what you’ve learned—it’s not wasted just because the world’s ending."},
            {"type": "empathetic", "response": "It’s okay to feel lost right now. Your efforts weren’t meaningless."}
        ],
        "honest-response": [
            "<em>Angry</em><br />\"Mattered? How did it matter if I’ll never even use it?\"",
            "<em>Reflective</em><br />\"Maybe you’re right. My hard work still means something, even now.\""
        ],
        "practical-response": [
            "<em>Hopeless</em><br />\"Learned what? How to waste time? None of it matters now.\"",
            "<em>Reassured</em><br />\"Thanks. I guess everything I learned still matters, even if the world’s ending.\""
        ],
        "empathetic-response": [
            "<em>Dismissive</em><br />\"It feels pretty meaningless right now, to be honest.\"",
            "<em>Calmer</em><br />\"You’re right. Maybe it wasn’t meaningless. Thanks for saying that.\""
        ]
    },
    {
        "call-id": 6,
        "caller": "Desperate Parent",
        "call": "<em>Frantic, but trying to stay composed</em><br />\"Hello? Is anyone there? Please, I—I don’t know what to do. My kids… they’re scared, and I can’t stop thinking about what’s coming. What should I tell them?\"",
        "options": [
            {"type": "honest", "response": "Tell them the truth. They deserve to know."},
            {"type": "practical", "response": "Keep them calm. They don’t need to know everything."},
            {"type": "empathetic", "response": "Just hold them close. That’s all that matters now."}
        ],
        "honest-response": [
            "<em>Hesistant, but accepting</em><br />\"Yeah… I guess you’re right. They should know. I’ll… I’ll tell them. Thank you.\"",
            "<em>Angry</em><br />\"How could I tell them that? They’re just kids! They don’t deserve this.\""
        ],
        "practical-response": [
            "<em>Relieved</em><br />\"That’s probably best. They don’t need to face the fear I’m feeling. Thank you… for the advice.\"",
            "<em>Resentful</em><br />\"I hate that I have to hide this from them. It’s not fair.\""
        ],
        "empathetic-response": [
            "<em>Emotional</em><br />\"Yeah, maybe that’s all we can do. Just hold on to each other until… it’s time. Thank you.\"",
            "<em>Fearful</em><br />\"I don’t know if I’m strong enough for this…\""
        ]
    },
    {
        "call-id": 7,
        "caller": "Nervous Caller",
        "call": "<em>Nervous</em><br />\"Is there any chance this could all be a false alarm? Maybe we’ll be okay after all?\"",
        "options": [
            {"type": "honest", "response": "I’m afraid there’s not much hope for that. The evidence is clear."},
            {"type": "practical", "response": "It’s hard to say for sure, but it’s better to prepare for the worst."},
            {"type": "empathetic", "response": "I wish I could say yes, but I’m not sure. Let’s hope for the best."}
        ],
        "honest-response": [
            "<em>Hopeful</em><br />\"I still believe there’s a way out. We just have to stay strong.\"",
            "<em>Sad</em><br />\"That’s not what I wanted to hear. I guess I have to face the truth.\""
        ],
        "practical-response": [
            "<em>Grateful</em><br />\"Thanks. It’s good advice to make the most of the time we have left.\"",
            "<em>Disappointed</em><br />\"That’s not what I was looking for, but maybe you’re right.\""
        ],
        "empathetic-response": [
            "<em>Relieved</em><br />\"Thanks for that. I’ll keep hoping for a miracle.\"",
            "<em>Frustrated</em><br />\"I wanted a real answer. Why can’t you just say yes?\"<br /><em>Hangs up</em>"
        ]
    },
    {
        "call-id": 8,
        "caller": "Angry Conspiracy Theorist",
        "call": "<em>Furious</em><br />\"This is all a hoax! They’re lying to us! The meteor isn’t real, and I’m not falling for it. Are you?\"",
        "options": [
        {"type": "honest", "response": "I’m afraid it’s real. The evidence is overwhelming."},
        {"type": "practical", "response": "Even if it’s not real, we should be prepared for the worst."},
        {"type": "empathetic", "response": "I understand why you’re upset, but I think we need to face reality."}
        ],
        "honest-response": [
            "<em>Thoughtful</em><br />\"Maybe I’m overreacting. I’ll look into it more.\"",
            "<em>Angrier</em><br />\"That’s exactly what they want you to think! You’re brainwashed!\""
        ],
        "practical-response": [
            "<em>Curious</em><br />\"I guess there’s no harm in being prepared… just in case.\"",
            "<em>Dismissive</em><br />\"Prepared for what? A hoax? I’m not wasting my time.\"<br /><em>Hangs up</em>"
        ],
        "empathetic-response": [
            "<em>Grateful</em><br />\"At least you’re not being rude about it. But I still don’t buy it.\"",
            "<em>Frustrated</em><br />\"You’re missing the point. This is all a distraction!\""
        ]
    },
    {
        "call-id": 9,
        "caller": "Nostalgic Elder",
        "call": "<em>Reflective</em><br />\"I’ve seen so much in my life. It’s hard to believe this is how it all ends. Do you think this is the worst thing the world’s ever faced?\"",
        "options": [
            {"type": "honest", "response": "It’s definitely one of the most challenging times in history."},
            {"type": "practical", "response": "We’ve faced hardship before. Let’s make the most of what time we have."},
            {"type": "empathetic", "response": "It’s hard to say, but I’m grateful you’ve shared your experiences with us."}
        ],
        "honest-response": [
            "<em>Thoughtful</em><br />\"Maybe it is the worst, but we’ll make it through together.\"",
            "<em>Resigned</em><br />\"I suppose every era has its challenges… but this feels different.\""
        ],
        "practical-response": [
            "<em>Hopeful</em><br />\"Yes, we’ve survived so much. Maybe we’ll survive this too.\"",
            "<em>Resigned</em><br />\"We may have survived before, but this feels different. I’m not so sure.\""
        ],
        "empathetic-response": [
            "<em>Grateful</em><br />\"Thank you for saying that. I’ve tried to share as much as I can.\"",
            "<em>Reflective</em><br />\"I’ve lived through so much, but this is hard to process.\""
        ]
    },
    {
        "call-id": 10,
        "caller": "LGBTQ+ Activist",
        "call": "<em>Passionate</em><br />\"It feels like the world never accepted us, and now it’s ending. What was all this fighting for? Did any of it even matter?\"",
        "options": [
            {"type": "honest", "response": "You’ve made a difference, and that’s what counts."},
            {"type": "practical", "response": "It mattered. You helped change lives for the better."},
            {"type": "empathetic", "response": "I’m sorry it feels that way, but your fight mattered more than you know."}
        ],
        "honest-response": [
            "<em>Hopeful</em><br />\"Maybe you’re right. At least we tried. That has to mean something.\"",
            "<em>Saddened</em><br />\"It’s hard to believe anything mattered in the end.\""
        ],
        "practical-response": [
            "<em>Grateful</em><br />\"Thank you for saying that. We did make a difference, didn’t we?\"",
            "<em>Frustrated</em><br />\"I’m not sure it was enough. We deserved more time to make things right.\""
        ],
        "empathetic-response": [
            "<em>Comforted</em><br />\"Thank you. It helps to hear that, even now.\"",
            "<em>Hopeless</em><br />\"I don’t know. I’m not sure I believe that anymore.\""
        ]
    },
    {
        "call-id": 11,
        "caller": "Disabled Veteran",
        "call": "<em>Reflective</em><br />\"I’ve spent my life fighting, surviving. And now this. What’s left for me to fight for when everything’s ending?\"",
        "options": [
        {"type": "honest", "response": "You don’t need to fight anymore. You’ve done enough."},
        {"type": "practical", "response": "You’ve fought enough battles. It’s time to find peace."},
        {"type": "empathetic", "response": "You’ve been through so much. It’s okay to rest now."}
        ],
        "honest-response": [
            "<em>Grateful</em><br />\"Maybe you’re right. Maybe it’s time I stopped fighting.\"",
            "<em>Empty</em><br />\"It doesn’t feel like enough. I’m not sure it ever will.\""
        ],
        "practical-response": [
            "<em>Relieved</em><br />\"Yeah, maybe it’s time I let go. Thanks for reminding me.\"",
            "<em>Angry</em><br />\"I don’t want peace. I want more time to keep fighting!\""
        ],
        "empathetic-response": [
            "<em>Comforted</em><br />\"Thank you. I needed to hear that.\"",
            "<em>Resentful</em><br />\"Rest? There’s no time to rest. Not like this.\""
        ]
    },
    {
        "call-id": 12,
        "caller": "Wealthy Businessman",
        "call": "<em>Worried</em><br />\"I’ve spent my life building my empire. None of it matters now, does it? What do I do with all this success?\"",
        "options": [
            {"type": "honest", "response": "Material success doesn’t mean much in the face of this, no."},
            {"type": "practical", "response": "You can use your wealth to help others now."},
            {"type": "empathetic", "response": "I understand why you feel that way, but maybe there’s still time to do something meaningful."}
        ],
        "honest-response": [
            "<em>Accepting</em><br />\"Yeah, I guess I knew that deep down. It was all just temporary.\"",
            "<em>Frustrated</em><br />\"I built all this for nothing? It’s not fair!\""
        ],
        "practical-response": [
            "<em>Inspired</em><br />\"You’re right. Maybe I can help someone in these final hours.\"",
            "<em>Resistant</em><br />\"Help others? I worked hard for this, why should I give it away now?\""
        ],
        "empathetic-response": [
            "<em>Hopeful</em><br />\"You’re right. Maybe there’s still time to do something that matters.\"",
            "<em>Defeated</em><br />\"I don’t think anything matters anymore, no matter what I do.\""
        ]
    },
    {
        "call-id": 13,
        "caller": "Homeless Woman",
        "call": "<em>Resigned</em><br />\"I’ve had nothing for so long, and now even the world is going to be taken away. What’s the point of trying anymore?\"",
        "options": [
            {"type": "honest", "response": "There might not be much point left, but you’re still here."},
            {"type": "practical", "response": "Hold on to what little time we have left. It’s all we’ve got."},
            {"type": "empathetic", "response": "I’m so sorry you’ve felt that way. No one should have to."}
        ],
        "honest-response": [
            "<em>Reflective</em><br />\"I guess being here is all we can really do now.\"",
            "<em>Hopeless</em><br />\"That’s not comforting. It’s all meaningless.\""
        ],
        "practical-response": [
            "<em>Grateful</em><br />\"You’re right. I’ll try to hold on.\"",
            "<em>Exhausted</em><br />\"Hold on? To what? There’s nothing left for me. This is bu*****!\"<em>Hangs up</em>"
        ],
        "empathetic-response": [
            "<em>Comforted</em><br />\"Thank you for saying that. It helps to hear.\"",
            "<em>Angry</em><br />\"You don’t understand. No one ever has.\"<em>Hangs up</em>"
        ]
    }
]

call_stories_backup = [
    {
        "call-id": 0,
        "caller": "Desperate Parent",
        "call": "<em>Frantic, but trying to stay composed</em><br />\"Hello? Is anyone there? Please, I—I don’t know what to do. My kids… they’re scared, and I can’t stop thinking about what’s coming. What should I tell them?\"",
        "options": [
            {"type": "honest", "response": "Tell them the truth. They deserve to know."},
            {"type": "practical", "response": "Keep them calm. They don’t need to know everything."},
            {"type": "empathetic", "response": "Just hold them close. That’s all that matters now."}
        ],
        "honest-response": "<em>Hesistant, but accepting</em><br />\"Yeah… I guess you’re right. They should know. I’ll… I’ll tell them. Thank you.\"",
        "practical-response": "<em>Relieved</em><br />\"That’s probably best. They don’t need to face the fear I’m feeling. Thank you… for the advice.\"",
        "empathetic-response": "<em>Emotional</em><br />\"Yeah, maybe that’s all we can do. Just hold on to each other until… it’s time. Thank you.\"",
    },
    {
        "call-id": 1,
        "caller": "Scientist in Denial",
        "call": "<em>Confident, analytical</em><br />\"I’m a scientist, working on a bunker project. I still think we can survive this, even if it’s a long shot. I’ve run the numbers over and over. Should I keep working on it?\"",
        "options": [
            {"type": "honest", "response": "It’s hopeless. Spend these last moments with the people you love."},
            {"type": "practical", "response": "It’s not about surviving. It’s about how you live before the end."},
            {"type": "empathetic", "response": "If it gives you purpose, keep going."}
        ],
        "honest-response": "<em>Pauses</em><br />\"Yeah… I guess you’re right. They should know. I’ll… I’ll tell them. Thank you.\"",
        "practical-response": "<em>Reflective</em><br />\"Hmm. Maybe you’re right. Maybe I’ve been too focused on survival, and not enough on the time I have left. Thank you.\"",
        "empathetic-response": "<em>Resolved</em><br />\"Yeah. You’re right. I’m going to keep working. What’s the point of giving up now?\"",
    },
    {
        "call-id": 2,
        "caller": "Lonely Elderly Man",
        "call": "<em>Soft-spoken, tired</em><br />\"Hello? It’s just me here... I’ve outlived everyone I loved. I don’t know what to do. Should I just wait for the end alone?\"",
        "options": [
            {"type": "honest", "response": "Yes, but you can find peace in the solitude."},
            {"type": "practical", "response": "You can still connect with others, even now."},
            {"type": "empathetic", "response": "You’re not alone, I’m here with you for now."}
        ],
        "honest-response": "<em>Resigned</em><br />\"I suppose you’re right. I’ve lived a full life, maybe it’s time to just accept it.\"",
        "practical-response": "<em>Hopeful</em><br />\"I could call the neighbors… Maybe we could sit together. That sounds nice.\"",
        "empathetic-response": "<em>Grateful</em><br />\"Thank you… It’s good to hear someone’s voice. Even for a little while.\""
    },
    {
        "call-id": 3,
        "caller": "Anxious Teenager",
        "call": "<em>Panicked, trembling</em><br />\"I’m freaking out. I don’t know how to handle this. Everyone around me is scared. What should I do?\"",
        "options": [
            {"type": "honest", "response": "It’s okay to be scared. We all are."},
            {"type": "practical", "response": "Focus on what you can control, like helping others."},
            {"type": "empathetic", "response": "I’m here for you. Take deep breaths, one step at a time."}
        ],
        "honest-response": "<em>Understanding</em><br />\"Yeah, I guess no one really knows what to do. I’m not alone in this, am I?\"",
        "practical-response": "<em>Determined</em><br />\"Maybe you’re right. I’ll see if I can help out around here. It might keep me from spiraling.\"",
        "empathetic-response": "<em>Calmer</em><br />\"Thank you… I’ll try to breathe. One step at a time.\""
    },
    { 
        "call-id": 4,
        "caller": "Young Couple in Love",
        "call": "<em>Excited, nervous</em><br />\"Hi, is this the radio station? We… well, we don’t really know what to do. We’re here together, and we love each other, but it feels like there’s no time left. Should we… I don’t know, make some big last gesture?\"",
        "options": [
            {"type": "honest", "response": "There’s no need for grand gestures. Just be together."},
            {"type": "practical", "response": "Celebrate your love! Make it a moment you’ll remember forever."},
            {"type": "empathetic", "response": "Hold each other close. The simple moments are what matter."}
        ],
        "honest-response": "<em>Thoughtful</em><br />\"You’re right. It’s not about doing something big. Just being together is enough.\"",
        "practical-response": "<em>Laughing, teary</em><br />\"Yeah! Why not? We’ll celebrate, make it a night to remember. Thank you for the advice!\"",
        "empathetic-response": "<em>Warm, emotional</em><br />\"Yeah… you’re right. We’ll just hold each other. That’s all that matters now. Thank you.\""
    },
    {
        "call-id": 5,
        "caller": "Disbelieving Conspiracy Theorist",
        "call": "<em>Confident, dismissive</em><br />\"You know this is all a hoax, right? The media’s trying to scare us, but I’m not falling for it. What do you think?\"",
        "options": [
            {"type": "honest", "response": "I think you’re wrong. This is real."},
            {"type": "practical", "response": "Does it matter at this point? Focus on what’s important."},
            {"type": "empathetic", "response": "I understand why you’re skeptical, but we have to prepare for the worst."}
        ],
        "honest-response": "<em>Dismissive</em><br />\"You can believe what you want. I’m not buying it.\"",
        "practical-response": "<em>Hesitant</em><br />\"I guess… maybe you’re right. What’s the harm in being ready?\"",
        "empathetic-response": "<em>Reluctant</em><br />\"Fine… I’ll think about it. Maybe it’s worth preparing, just in case.\""
    },
    {
        "call-id": 6,
        "caller": "Guilty Father",
        "call": "<em>Guilt-ridden, remorseful</em><br />\"I should’ve done more for my family. I wasted so much time. How do I make up for it now?\"",
        "options": [
            {"type": "honest", "response": "You can’t change the past, just focus on the present."},
            {"type": "practical", "response": "Make the most of the time you have left with them."},
            {"type": "empathetic", "response": "Forgive yourself. Your love is what matters now."}
        ],
        "honest-response": "<em>Sorrowful</em><br />\"Yeah, I guess there’s no use regretting now. Thank you.\"",
        "practical-response": "<em>Determined</em><br />\"You’re right. I’ll spend every minute with them from now on.\"",
        "empathetic-response": "<em>Tearful</em><br />\"Thank you… I hope they can forgive me too.\""
    },
    {
        "call-id": 7,
        "caller": "Lost Religious Leader",
        "call": "<em>Confused, searching</em><br />\"I’ve led my congregation for years, but now I’m questioning everything. How do I guide them in these last days?\"",
        "options": [
            {"type": "honest", "response": "Be honest about your doubts. They deserve to know you’re human."},
            {"type": "practical", "response": "Help them find peace, regardless of your own uncertainty."},
            {"type": "empathetic", "response": "It’s okay to be uncertain. Just being with them is enough."}
        ],
        "honest-response": "<em>Resigned</em><br />\"I suppose you’re right. Maybe it’s time for honesty.\"",
        "practical-response": "<em>Steady</em><br />\"Yes, peace. That’s what they need right now.\"",
        "empathetic-response": "<em>Humbled</em><br />\"Thank you… Maybe just being there is enough.\""
    },
    {
        "call-id": 8,
        "caller": "Regretful CEO",
        "call": "<em>Regretful, self-reflective</em><br />\"I spent my life building an empire, but now it feels meaningless. What should I do with what’s left?\"",
        "options": [
            {"type": "honest", "response": "Let it go. None of it matters now."},
            {"type": "practical", "response": "Use your resources to help others in these final days."},
            {"type": "empathetic", "response": "It’s okay to feel lost. Your legacy is more than your wealth."}
        ],
        "honest-response": "<em>Empty</em><br />\"You’re right. What’s the point?\"",
        "practical-response": "<em>Resolved</em><br />\"I’ll find ways to help. It’s the least I can do.\"",
        "empathetic-response": "<em>Contemplative</em><br />\"Maybe… maybe I’ve been looking at it wrong. Thank you.\""
    },
    {
        "call-id": 9,
        "caller": "Nurse on the Frontlines",
        "call": "<em>Exhausted, overwhelmed</em><br />\"I’m doing everything I can, but I feel like it’s never enough. Should I keep going or spend my last moments with my family?\"",
        "options": [
            {"type": "honest", "response": "You’ve done enough. Be with your loved ones."},
            {"type": "practical", "response": "If helping others gives you peace, then keep going."},
            {"type": "empathetic", "response": "It’s okay to stop. You deserve to be with your family."}
        ],
        "honest-response": "<em>Relieved</em><br />\"Thank you… I think you’re right. It’s time to go home.\"",
        "practical-response": "<em>Determined</em><br />\"You’re right. This is my calling. I’ll keep going.\"",
        "empathetic-response": "<em>Emotional</em><br />\"Thank you… I needed to hear that. I’ll go home.\""
    },
    {
        "call-id": 10,
        "caller": "Bitter Rival",
        "call": "<em>Confrontational, tense</em><br />\"I’ve spent years trying to outdo my rival. But now, it feels like it was all for nothing. Was it worth it?\"",
        "options": [
            {"type": "honest", "response": "No, it wasn’t. Let it go."},
            {"type": "practical", "response": "Focus on finding closure and peace with them."},
            {"type": "empathetic", "response": "Maybe it was your way of pushing yourself. It doesn’t define you."}
        ],
        "honest-response": "<em>Resigned</em><br />\"Yeah… I guess it really was all for nothing.\"",
        "practical-response": "<em>Contemplative</em><br />\"I’ll reach out. Maybe we can end things on a better note.\"",
        "empathetic-response": "<em>Thoughtful</em><br />\"Maybe you’re right. It was never about them, was it?\""
    },
    {
        "call-id": 11,
        "caller": "Overprotective Parent",
        "call": "<em>Worried, controlling</em><br />\"I’ve done everything to protect my kids from this world. Now it feels like I’ve failed. How do I keep them safe?\"",
        "options": [
            {"type": "honest", "response": "You can’t protect them from everything. Just love them now."},
            {"type": "practical", "response": "Focus on creating a calm, loving environment in these final days."},
            {"type": "empathetic", "response": "You haven’t failed. Your love is the best protection you can give."}
        ],
        "honest-response": "<em>Sad, but accepting</em><br />\"You’re right. I can’t keep them safe forever.\"",
        "practical-response": "<em>Determined</em><br />\"I’ll do that. I’ll make sure they feel safe, even if the world isn’t.\"",
        "empathetic-response": "<em>Emotional</em><br />\"Thank you. I hope they know how much I love them.\""
    },  
    {
        "call-id": 12,
        "caller": "Grieving Widow",
        "call": "<em>Heartbroken, sobbing</em><br />\"I lost my husband just before all this. Now I’m facing the end alone. How do I go on?\"",
        "options": [
            {"type": "honest", "response": "You don’t have to go on. It’s okay to just be."},
            {"type": "practical", "response": "Remember him. Let his memory guide you through."},
            {"type": "empathetic", "response": "You’re not alone. I’m here with you, for now."}
        ],
        "honest-response": "<em>Grieving</em><br />\"Thank you… I’ll just… be for now.\"",
        "practical-response": "<em>Reflective</em><br />\"Yes… I’ll hold on to him in my heart.\"",
        "empathetic-response": "<em>Grateful</em><br />\"Thank you… It helps to know someone’s here.\""
    },
    {
        "call-id": 13,
        "caller": "Reckless Daredevil",
        "call": "<em>Excited, fearless</em><br />\"I’ve lived my life on the edge, taking risks, pushing boundaries. I’m thinking of going out with one final stunt. Should I?\"",
        "options": [
            {"type": "honest", "response": "No, it’s not worth it. Spend time with the people who care about you."},
            {"type": "practical", "response": "If it’s what you truly want, then make it count."},
            {"type": "empathetic", "response": "Just make sure you’re not doing it to escape something deeper."}
        ],
        "honest-response": "<em>Disappointed</em><br />\"I guess you’re right… maybe it’s time to slow down.\"",
        "practical-response": "<em>Determined</em><br />\"Yeah, I’m going to make it the best one yet!\"",
        "empathetic-response": "<em>Reflective</em><br />\"Maybe I’ve been running away… I’ll think about it.\""
    },
    {
        "call-id": 14,
        "caller": "Hopeless Romantic",
        "call": "<em>Solemn, yet yearning</em><br />\"I never told them how I feel. And now, it’s too late. Should I still confess, even though the world is ending?\"",
        "options": [
            {"type": "honest", "response": "Yes, tell them. You have nothing to lose."},
            {"type": "practical", "response": "There’s no point now. Spend your time with those you love."},
            {"type": "empathetic", "response": "It’s okay to want that closure, even now. Do what feels right."}
        ],
        "honest-response": "<em>Nervous</em><br />\"You’re right. I’ll tell them… even if it’s too late.\"",
        "practical-response": "<em>Sorrowful</em><br />\"Maybe you’re right. It doesn’t matter anymore.\"",
        "empathetic-response": "<em>Grateful</em><br />\"Thank you. I think I needed to hear that it’s okay to feel this way.\""
    },
    {
        "call-id": 15,
        "caller": "Terminally Ill Patient",
        "call": "<em>Resigned, reflective</em><br />\"I’ve been dying for years, but now everyone else is too. Should I feel relieved that I’m not alone anymore, or is that selfish?\"",
        "options": [
            {"type": "honest", "response": "It’s okay to feel both relief and guilt. You’re human."},
            {"type": "practical", "response": "Focus on spending your last moments in peace, not guilt."},
            {"type": "empathetic", "response": "You’ve carried that burden for so long. It’s okay to feel relieved."}
        ],
        "honest-response": "<em>Contemplative</em><br />\"Thank you. I guess I needed to hear that it’s okay to feel both.\"",
        "practical-response": "<em>Peaceful</em><br />\"You’re right. I should focus on peace now.\"",
        "empathetic-response": "<em>Relieved</em><br />\"I didn’t realize how much weight I was carrying. Thank you.\""
    },
    {
        "call-id": 16,
        "caller": "Estranged Sibling",
        "call": "<em>Guilty, unsure</em><br />\"I haven’t spoken to my brother in years. Now I feel like I should reach out, but… what if he doesn’t want to talk to me?\"",
        "options": [
            {"type": "honest", "response": "Do it. At least you’ll have tried."},
            {"type": "practical", "response": "There’s no point in forcing it now. Focus on those who are here."},
            {"type": "empathetic", "response": "It’s understandable to hesitate, but you won’t know unless you try."}
        ],
        "honest-response": "<em>Determined</em><br />\"Yeah… I’ll try. It’s worth a shot.\"",
        "practical-response": "<em>Resigned</em><br />\"You’re right. Maybe I should just leave it alone.\"",
        "empathetic-response": "<em>Thoughtful</em><br />\"I guess you’re right. I won’t know until I try.\""
    },
    {
        "call-id": 17,
        "caller": "Burnt-Out Activist",
        "call": "<em>Exhausted, disillusioned</em><br />\"I’ve spent my life fighting for change, but now it’s all for nothing. Should I have done something else with my time?\"",
        "options": [
            {"type": "honest", "response": "Your work mattered, even if the world is ending."},
            {"type": "practical", "response": "No one could have predicted this. Don’t regret your past."},
            {"type": "empathetic", "response": "You fought for what you believed in. That’s worth something, even now."}
        ],
        "honest-response": "<em>Reflective</em><br />\"Maybe… maybe you’re right. It wasn’t all for nothing.\"",
        "practical-response": "<em>Sighing</em><br />\"You’re right. I couldn’t have known.\"",
        "empathetic-response": "<em>Emotional</em><br />\"Thank you. It’s good to know someone thinks it was worth something.\""
    },
    {
        "call-id": 18,
        "caller": "Lonely Elder",
        "call": "<em>Sad, nostalgic</em><br />\"I’ve outlived all my friends and family. Now the world is ending, and I’m all alone. Should I reach out to strangers?\"",
        "options": [
            {"type": "honest", "response": "Yes, you don’t have to face this alone."},
            {"type": "practical", "response": "If it brings you comfort, why not? But don’t force it."},
            {"type": "empathetic", "response": "It’s okay to seek connection. We’re all facing this together."}
        ],
        "honest-response": "<em>Hopeful</em><br />\"Maybe you’re right. I’ll try… maybe someone out there will listen.\"",
        "practical-response": "<em>Thoughtful</em><br />\"Yeah, I’ll see if it feels right.\"",
        "empathetic-response": "<em>Grateful</em><br />\"Thank you. It helps to know I’m not the only one feeling this way.\""
    },
    {
        "call-id": 19,
        "caller": "Survivalist",
        "call": "<em>Pragmatic, intense</em><br />\"I’ve spent years preparing for the end of the world, but a meteor? I didn’t plan for that. What do I do now?\"",
        "options": [
            {"type": "honest", "response": "There’s no surviving this. Use your time wisely."},
            {"type": "practical", "response": "Focus on the people around you, not just survival."},
            {"type": "empathetic", "response": "It’s okay to feel lost. Even the best plans can’t predict everything."}
        ],
        "honest-response": "<em>Defeated</em><br />\"I guess… I guess there’s nothing I can do now.\"",
        "practical-response": "<em>Reflective</em><br />\"You’re right. It’s time to focus on what really matters.\"",
        "empathetic-response": "<em>Resigned</em><br />\"Yeah… I couldn’t have planned for everything. Thanks.\""
    },
    {
        "call-id": 20,
        "caller": "Newlywed",
        "call": "<em>Grief-stricken, in love</em><br />\"We just got married last week. Now, we won’t get to grow old together. How do I come to terms with that?\"",
        "options": [
            {"type": "honest", "response": "You don’t have to. Just focus on the love you have now."},
            {"type": "practical", "response": "Spend every moment together, and make it count."},
            {"type": "empathetic", "response": "It’s okay to grieve for the future you won’t have, but cherish the present."}
        ],
        "honest-response": "<em>Tearful</em><br />\"You’re right. There’s no use thinking about what won’t be.\"",
        "practical-response": "<em>Determined</em><br />\"We’ll make these days the best they can be.\"",
        "empathetic-response": "<em>Emotional</em><br />\"Thank you… I needed to hear that.\""
    },
    {
        "call-id": 21,
        "caller": "Teacher with Students",
        "call": "<em>Protective, distressed</em><br />\"I’m with a group of kids. They’re scared. What do I tell them? How do I keep them calm?\"",
        "options": [
            {"type": "honest", "response": "Tell them the truth, but in a way they can understand."},
            {"type": "practical", "response": "Focus on keeping them occupied. They don’t need to know everything."},
            {"type": "empathetic", "response": "Be there for them. Sometimes just your presence is enough."}
        ],
        "honest-response": "<em>Resolute</em><br />\"I’ll tell them the truth, gently. They deserve that much.\"",
        "practical-response": "<em>Relieved</em><br />\"You’re right. I’ll keep them busy and safe.\"",
        "empathetic-response": "<em>Comforting</em><br />\"I’ll stay with them. That’s what they need most.\""
    },
    {
        "call-id": 22,
        "caller": "Religious Leader",
        "call": "<em>Faithful, calm</em><br />\"I’ve always preached about an afterlife, but now that the end is here, I’m having doubts. How do I stay strong for my community?\"",
        "options": [
            {"type": "honest", "response": "It’s okay to admit your doubts. You’re human."},
            {"type": "practical", "response": "Focus on providing comfort, even if you’re unsure."},
            {"type": "empathetic", "response": "You’re allowed to be afraid. Lean on your faith, just as others lean on you."}
        ],
        "honest-response": "<em>Humbled</em><br />\"Thank you. I’ll be honest with them, and myself.\"",
        "practical-response": "<em>Resolute</em><br />\"You’re right. I’ll focus on comforting them, even if I have doubts.\"",
        "empathetic-response": "<em>Reassured</em><br />\"Yes… I’ll hold on to my faith and lead them through this.\""
    },
    {
        "call-id": 23,
        "caller": "Grieving Parent",
        "call": "<em>Distraught, lost</em><br />\"I lost my child not long ago, and now the world is ending. How do I find peace when everything is falling apart?\"",
        "options": [
            {"type": "honest", "response": "There may be no peace, but it’s okay to feel that."},
            {"type": "practical", "response": "Honor their memory by living these last moments fully."},
            {"type": "empathetic", "response": "Grief is a journey. Be kind to yourself in these final days."}
        ],
        "honest-response": "<em>Broken</em><br />\"I guess… there’s no way to feel peace now.\"",
        "practical-response": "<em>Determined</em><br />\"You’re right. I’ll honor them by living fully, even now.\"",
        "empathetic-response": "<em>Grateful</em><br />\"Thank you… I needed to hear that.\""
    }
]


ending_script = {
        "honest": {
            "messages": [
                "<em>Steady, solemn voice</em>",
                "The truth is harsh, unforgiving.",
                "Tonight, we faced it head-on.",
                "There were no comforting lies, no promises of safety—only reality",
                "Some looked for hope, but I couldn’t give them that",
                "What we faced together was real, and it’s what’s waiting for us now.",
                "The meteor comes, unrelenting, and we’re out of time.",
                "<em>Pauses briefly, letting the weight settle in.</em>",
                "But maybe… just maybe, there’s strength in knowing.",
                "We took this final hour to face what’s coming, to confront our fears without turning away.",
                "We lived with open eyes, and in a way, that’s the bravest thing any of us could have done.",
                "<em>The sound of the meteor impact is heard from afar.</em>",
                "..."
            ]
        },
        "honest-silent": {
            "messages": [
                "<em>Sincere, straightforward voice</em>",
                "I decided not to play any songs tonight. There wasn’t time for that, and I figured we all deserved something real.",
                "You’ve been listening for the truth, and I owe it to you to be honest.",
                "<em>A short pause, gathering courage</em>",
                "This is it. There’s no escaping what’s coming. The end is near, and no amount of music or words is going to change that.",
                "I don’t have comforting lies for you. I don’t have hope to offer. But I do have the truth.",
                "<em>The sound of distant rumbling begins to grow</em>",
                "It’s okay to be scared. I’m scared too. We all are. But we don’t need to run from that fear—we can face it together.",
                "I didn’t play music tonight because I thought maybe silence, and honesty, would serve us better. In these last moments, all we have left is the truth.",
                "<em>A heavy breath, a moment of vulnerability</em>",
                "Thank you for being here with me, for letting me be real with you. In a world full of uncertainty, we’ve shared this one undeniable truth: the end is coming, but we’re not facing it alone.",
                "<em>The rumble of the meteor gets louder, closing in</em>",
                "Goodbye, my friends. Hold tight to what matters. And let’s face the end together, honestly.",
                "<em>The roar of the meteor fills the air as the screen fades to black</em>",
                "..."
            ]
        },
        "honest-reflective": {
            "messages": [
                "<em>Honest, reflective voice</em>",
                "I’ve been thinking a lot while the music played tonight... thinking about the truth we’ve all been avoiding.",
                "There’s no sugar-coating it—what’s coming is inescapable, and I won’t pretend otherwise.",
                "I could’ve tried to give you hope, or comfort, but that wouldn’t have been real. Not tonight.",
                "<em>A long, candid pause</em>",
                "The truth is, we’re all scared. I’m scared. And maybe that’s okay to admit.",
                "The music... it gave us something to hold on to, a space to reflect on everything we’re about to lose. But it couldn’t change anything.",
                "<em>The sound of the meteor rumbling grows faintly in the distance.</em>",
                "I took these moments between songs to reflect, to be honest with myself—and with you.",
                "We’ve all faced this final truth together, and I think that’s the best we could do. No more hiding. No more pretending.",
                "<em>A deep, quiet breath</em>",
                "Thank you for letting me be real with you. It’s been an honor to share this time, even in the face of the inevitable.",
                "<em>The rumbling grows louder, signaling the approach of the end.</em>",
                "Goodbye, my friends. I hope you find the strength to face what comes next... just as you are.",
                "<em>The sound of the meteor echoes in the distance as the screen fades to black.</em>",
                "..."
            ]
        },
        "practical": {
            "messages": [
                "<em>Thoughtful, measured voice</em>",
                "It wasn’t about survival tonight.",
                "It wasn’t about escaping the inevitable.",
                "What mattered was how we spent the time we had left.",
                "Some of us chose to reflect, some of us sought action, and others simply held onto the ones we love.",
                "In the end, what we did with these final moments defined us.",
                "<em>Voice deepens, reflective and calm</em>",
                "Life is a series of moments.",
                "We don’t always get to choose how it ends, but we can choose how we live before it does.",
                "Tonight, we chose to live with intention.",
                "We found meaning in the time we had, and that… that’s enough.",
                "<em>The sound of the meteor’s impact is heard.</em>",
                "..."
            ]
        },
        "practical-silent": {
            "messages": [
                "<em>Calm, direct voice</em>",
                "I skipped the songs tonight. Not because they didn’t matter, but because I thought there were more important things to focus on.",
                "Time is short, and distractions won’t change that.",
                "<em>A brief pause, gathering thoughts</em>",
                "We’re staring down the inevitable, and there’s no sense pretending otherwise. So here’s what I want you to do—use this time wisely.",
                "Make sure you’re with the people who matter. Say what needs to be said. Don’t leave anything unfinished.",
                "This isn’t about fear—it’s about making peace with what’s coming.",
                "<em>The sound of distant rumbling begins to grow louder</em>",
                "I didn’t play music because this moment is bigger than any song. It’s about taking control of how you meet the end.",
                "Focus on what’s in front of you. Gather your loved ones. Make these final moments count.",
                "<em>A deep breath, steady and composed</em>",
                "Thank you for tuning in tonight. Stay calm, stay focused. You know what you need to do.",
                "<em>The rumble of the meteor grows louder, closing in</em>",
                "Goodbye, my friends. I wish you peace and strength for what’s next.",
                "<em>The sound of the meteor becomes deafening as the screen fades to black</em>",
                "..."
            ]
        },
        "practical-reflective": {
            "messages": [
                "<em>Calm, pragmatic voice</em>",
                "As the music played tonight, I couldn’t help but think about what we should be doing right now.",
                "It’s easy to get lost in the sound, to lose track of time, but we don’t have that luxury anymore.",
                "<em>A brief pause, as if weighing the importance of each word</em>",
                "I’ve been honest with you tonight, but more than that, I’ve tried to be practical. There’s no stopping what’s coming, but we can control how we spend these last moments.",
                "Hold your loved ones. Make sure they know you care. Find peace with whatever needs to be said or done.",
                "We can’t change the end, but we can decide how we meet it.",
                "<em>The faint rumbling of the meteor approaches in the background.</em>",
                "I took this time between calls to reflect on what’s left, and I realized that the best thing we can do now is prepare ourselves.",
                "Say the things you’ve been holding back, tie up the loose ends—these final moments matter, maybe more than anything else ever has.",
                "<em>A quiet exhale</em>",
                "Thank you for listening, for being with me tonight. Take care of yourselves, and each other. That’s all we can do now.",
                "<em>The rumble grows louder as the meteor nears.</em>",
                "Goodbye, my friends. Be ready for what comes next. You’ve got this.",
                "<em>The sound of the meteor intensifies as the screen fades to black.</em>",
                "..."
            ]
        },
        "empathetic": {
            "messages": [
                "<em>Emotionally charged, soft voice</em>",
                "In the face of the end, all that’s left are the people we love, the voices we hold onto.",
                "Tonight wasn’t about fear—it was about connection.",
                "Whether we reached out in love, in grief, or in fear, what mattered most was that we weren’t alone.",
                "We spent this time together, sharing our stories, our hopes, and our fears.",
                "<em>Voice catches slightly, the emotion palpable.</em>",
                "Maybe that’s all any of us ever wanted.",
                "To know we’re heard, that we’re seen, that we’re not going through this alone.",
                "Tonight, I heard you.",
                "And as the sky darkens, know that you mattered.",
                "We all did.",
                "<em>Sounds of sobbing as the meteor crashes.</em>",
                "..."
            ]
        },
        "empathetic-silent": {
            "messages": [
                "<em>Calm, reflective voice</em>",
                "I didn’t play a single song tonight.",
                "No distractions, no noise.",
                "Just you, me, and the silence between us.",
                "Maybe that silence spoke louder than music ever could.",
                "These last moments weren’t about melodies, they were about what makes our lives worth living for.",
                "And maybe that’s why I chose not to fill the air with songs.",
                "<em>A brief pause, as if trying to find the right words</em>",
                "I thought... maybe we didn’t need to drown it all out.",
                "Maybe, in this quiet, we could finally hear what truly matters.",
                "It’s not about the end we can’t avoid.",
                "It’s about sitting together in the quiet before it arrives.",
                "No music, no words can change what’s coming, but at least we faced it together.",
                "<em>The sound of distant rumbling, growing louder.</em>",
                "Thank you for sharing this silence with me.",
                "Hold on to the ones you love...",
                "<em>A long, quiet breath</em>",
                "Goodbye, my friends.",
                "<em>The rumble intensifies as the meteor approaches.</em>",
                "..."
            ]
        },
        "empathetic-reflective": {
            "messages": [
                "<em>Thoughtful, somber voice</em>",
                "As the music played tonight, I found myself lost in thought...",
                "...letting each note carry me somewhere far from here.",
                "It was more than just sound—it felt like a chance to breathe, to think about everything we've been through.",
                "These last moments have been heavy, but maybe the music gave us a way to lighten that load, if only for a little while.",
                "<em>A soft, contemplative pause</em>",
                "I took a moment before each call, reflecting on what’s truly important when time is running out.",
                "It’s strange, how music can make you feel both the weight of the world and the beauty of it at the same time.",
                "Maybe that’s what we needed—to remember that even in the darkest hours, there’s still something worth holding onto.",
                "<em>The distant hum of the meteor can be heard, growing closer.</em>",
                "So, as we close out this final broadcast, I want to thank you. For listening, for calling, for sharing this time.",
                "The music played, and so did our lives.",
                "Until the very last note.",
                "<em>A deep, quiet sigh as the DJ contemplates the inevitable.</em>",
                "Goodbye, my friends.",
                "May we all find peace in these final moments.",
                "<em>The sound of the meteor becomes louder as the screen fades to black.</em>",
                "..."
            ]
        },
        "open-ended": {
            "messages": [
                "<em>Philosophical, introspective voice</em>",
                "Tonight wasn’t about the end—it was about understanding what comes before it.",
                "We asked questions that couldn’t be answered, we searched for meaning in a world about to vanish.",
                "And in that search, maybe we found something more.",
                "Maybe it wasn’t about the meteor at all.",
                "<em>Pauses, as if pondering the very nature of existence.</em>",
                "Perhaps the end is just another part of the journey, another step in a story we don’t fully understand.",
                "And maybe that’s okay.",
                "Maybe we don’t need all the answers.",
                "We just need to live the moments we have, and let the rest unfold as it will.",
                "<em>The sound of the meteor echoes in the distance.</em>",
                "..."
            ]
        },

        "open-ended-silent": {
            "messages": [
                "<em>Reflective, measured voice</em>",
                "I made the choice to skip the songs tonight.",
                "It felt like the right thing to do, given the circumstances.",
                "In these final hours, I wanted to focus on what really matters.",
                "Whether it’s facing the truth, providing practical advice, or just offering a moment of empathy,",
                "I hoped to give you something meaningful.",
                "<em>A brief pause, allowing the weight of the moment to settle</em>",
                "Sometimes, there’s no music that can capture what we’re feeling.",
                "Sometimes, we just need to face reality,",
                "plan our last steps wisely,",
                "or find comfort in shared humanity.",
                "We’re all dealing with this in our own way.",
                "And that’s okay.",
                "Whether you needed honesty,",
                "practical advice,",
                "or just someone who understands,",
                "I hope I’ve been able to offer that.",
                "<em>The sound of the meteor rumbling grows louder in the background</em>",
                "As we come to the end of our time together,",
                "remember that it’s not just about how we face the end,",
                "but about how we spend these final moments with each other.",
                "Thank you for being here, for sharing this experience.",
                "Take care of yourself and those around you.",
                "Hold onto whatever brings you peace in these last hours.",
                "<em>The rumbling intensifies, signaling the approach of the end</em>",
                "Goodbye, my friends.",
                "Whatever you need right now, I hope you find it.",
                "We’ve faced this together, and that means something.",
                "<em>The sound of the meteor becomes deafening as the screen fades to black</em>",
                "..."
            ]
        },
        "open-ended-reflective": {
            "messages": [
                "<em>Contemplative, soothing voice</em>",
                "During the music tonight, I took some time to reflect.",
                "It felt like the right way to spend these last moments,",
                "allowing both the songs and our thoughts to resonate deeply.",
                "Whether you needed honesty, practical advice, or just a bit of empathy,",
                "I hoped that our time together could offer you something meaningful amidst the uncertainty.",
                "<em>A thoughtful pause, as if letting the reflections settle</em>",
                "The music gave us a space to think, to prepare, or simply to connect with our feelings.",
                "And as the end draws near, I wanted to make sure we faced it in a way that mattered.",
                "We’re all dealing with this in our own way, and that’s perfectly okay.",
                "If you needed a clear-eyed truth,",
                "practical steps to make the most of these moments,",
                "or just someone who understands,",
                "I hope I was able to provide that.",
                "<em>The sound of the meteor rumbling in the background grows louder</em>",
                "As we approach the final moments, remember that what we do now can still have meaning.",
                "Cherish these last hours, find comfort in those around you, and hold onto what brings you peace.",
                "Thank you for sharing this time with me.",
                "I hope our reflections, our conversations, and our shared moments have given you some solace as we face the inevitable together.",
                "<em>The rumble intensifies, signaling the approach of the end</em>",
                "Goodbye, my friends.",
                "May you find strength, clarity, or comfort in whatever you need right now.",
                "We’ve faced this together, and that makes all the difference.",
                "<em>The sound of the meteor becomes overwhelming as the screen fades to black</em>",
                "..."
            ]
        },
        
        "default": {
            "messages": [
                "<em>There was no chance to say goodbye as the meteor hits the earth.</em>"
            ]
        }
}


background_music_sounds = {}

game_songs = [
    {
        "song_id": 0,
        "song_url": "_music/game_songs/everything-works-out-in-the-end",
        "song_title": "Everything Works Out in the End",
        "song_artist": "Calvin Clavier",
        "song_duration": "04:00",
        "credits_url": "https://pixabay.com/music/modern-classical-sad-piano-music-everything-works-out-in-the-end-238441/",
        "artist_profile_url": "https://pixabay.com/users/calvinclavier-16027823/",
        "genre": ["country", "folk", "rock"],
        "tags": ["lively"]
    },
    {
        "song_id": 1,
        "song_url": "_music/game_songs/cinematic-time-lapse",
        "song_title": "Cinematic Time Lapse",
        "song_artist": "Aleksey Chistilin",
        "credits_url": "https://pixabay.com/music/main-title-cinematic-time-lapse-115672/",
        "artist_profile": "https://pixabay.com/users/lexin_music-28841948/",
        "song_duration": "02:01",
        "genre": ["country", "folk", "rock"],
        "tags": ["lively"]
    },
    {
        "song_id": 2,
        "song_url": "_music/game_songs/loves-serenade",
        "song_title": "Loves Serenade",
        "song_artist": "Sergio Prosvirini",
        "credits_url": "https://pixabay.com/music/modern-classical-loves-serenade-188266/",
        "artist_profile": "https://pixabay.com/users/top-flow-28521292/",
        "song_duration": "03:13",
        "genre": ["country", "folk", "rock"],
        "tags": ["lively"]
    },
    /*{
        "song_id": 3,
        "song_url": "_music/game_songs/morning-in-the-mountains",
        "song_title": "Morning in the Mountains",
        "song_artist": "Calvin Clavier",
        "credits_url": "https://pixabay.com/music/modern-classical-morning-in-the-mountains-201840/",
        "artist_profile_url": "https://pixabay.com/users/calvinclavier-16027823/",
        "song_duration": "02:52",
        "genre": ["country", "folk", "rock"],
        "tags": ["lively"]
    },*/
    {
        "song_id": 4,
        "song_url": "_music/game_songs/for-when-it-rains",
        "song_title": "For When It Rains",
        "song_artist": "Juan Sanchez",
        "credits_url": "https://pixabay.com/music/modern-classical-for-when-it-rains-112785/",
        "artist_profile_url": "https://pixabay.com/users/juan_sanchez_music-8771929/",
        "song_duration": "05:37",
        "genre": ["country", "folk", "rock"],
        "tags": ["lively"]
    },
    {
        "song_id": 5,
        "song_url": "_music/game_songs/conquest-of-eternity",
        "song_title": "Conquest of Eternity",
        "song_artist": "Yevhen Onoychenko",
        "credits_url": "https://pixabay.com/music/main-title-conquest-of-eternity-229230/",
        "artist_profile_url": "https://pixabay.com/users/onoychenkomusic-24430395/",
        "song_duration": "02:12",
        "genre": ["country", "folk", "rock"],
        "tags": ["lively"]
    }
]


var how_to_script = [
    {
        "text": "In this game, you'll step into the shoes of a DJ delivering one last radio show before the world faces its end.",
    },
    {
        "text": "Here’s how to navigate and make the most of your time on air...",
    },
    {
        "title": "Move Through the Broadcast",
        "text": "To advance through the scenes of the game, simply click the sky blue button located at the bottom of the screen.",
        "image": "_imgs/how-to/move-through-broadcast-button.png"
    },
    {
        "title": "Move Through the Broadcast",
        "text": "This button will guide you from one part of the broadcast to the next, moving you through the final moments of the show.",
        "image": "_imgs/how-to/move-through-broadcast-button.png"
    },
    {
        "title": "Choose Your Music",
        "text": "During the show, you’ll be asked to select the songs that will play on air.",
        "image": "_imgs/how-to/choose-music.png"
    },
    {
        "title": "Choose Your Music",
        "text": "Click on the dots below the song list to scroll through different music options",
        "image": "_imgs/how-to/choose-music-indicated-dots.png"
    },
    {
        "title": "Handle Caller Requests",
        "text": "As the DJ, you'll receive calls from listeners asking for advice or comfort during these final days",
        "image": "_imgs/how-to/caller-dialog-scene.png"
    },
    {
        "title": "Handle Caller Requests",
        "text": "Each caller will present a situation, and you’ll be given a few possible responses.",
        "image": "_imgs/how-to/caller-dialog-scene.png"
    },
    {
        "title": "Handle Caller Requests",
        "text": "Choose the message you feel will help them the most in their final moments.",
        "image": "_imgs/how-to/caller-dialog-scene.png"
    },
    {
        "title": "Skip the Music",
        "text": "You don’t have to play a song after every call. If you feel that music isn’t needed, you can choose to skip the song and go straight to the next caller.",
        "image": "_imgs/how-to/skip-song-button-indicated.png"
    },
   /* {
        "title": "Getting Help",
        "text": "When you feel lost (as most will do in their final days), you can always ask for help.",
        "image": "_imgs/how-to/help-button-indicated.png"
    }, */
]