call_stories = [
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


ending_monolouges = {
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
                "<em>The sound of the meteor impact is heard, followed by silence.</em>"
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
                "<em>The sound of the meteor’s impact is heard, then silence.</em>"
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
                "<em>The meteor hits, the rumble fades into silence.</em>"
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
                "<em>The sound of the meteor echoes in the distance, followed by a soft, thoughtful silence.</em>"
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


