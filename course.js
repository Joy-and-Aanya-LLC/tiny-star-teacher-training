/* Tiny Star Teacher Training — course content.
   Sources: Tiny Star Teacher Practice Manual 2026 v2, program slides, General Guidance,
   Lesson 1 Support guide, Classroom Tracker, and the "Emails to Parents" templates.
   Student names in examples are fictional. */

const DRIVE = id => "https://drive.google.com/file/d/" + id + "/view";
const VID = {
  intro: ["Classrooms Intro Video", DRIVE("1P5TI_IxgcMXOoFdSeDs1uqgzibNdXuJh")],
  med: ["Young Author Meditation (real class)", DRIVE("1SPIT9qANdJr8Zp_AhDmfWXTAKRf3xAV5")],
  v4c: ["4C Creator Visualization / Meditation", DRIVE("1LIMaTW6z61fVRJAxjVOyD9jHLS-_QaO0")],
  set2: ["Clip 1: Classroom setup (part 1)", DRIVE("1TklgyqVx9cNnJ9RC9EMwJthU-l9EEeBb")],
  set3: ["Clip 1: Classroom setup (part 2)", "https://share.icloud.com/photos/065EhPR1i_ogLF7-vZJRp9Qkw"],
  lect: ["Clip 2: Teacher Lecture", DRIVE("1JpbFA6k7adpdjxK6e59Ot4roeHrfTSp8")],
  feed: ["Clip 3: Ask for Feedback & Give Feedback", DRIVE("1immcpkMVuX3O9lS_a6W7iM5xQfG5QY3d")],
  feed2: ["Feedback in a real class", DRIVE("1eKyBcjyj1rUQTsHUnkdlNEgL4LentQWZ")],
  music: ["Clip 4: Creating with Classical Music", DRIVE("1cExyq13aC1UKw1MJWfxkbL3Y1bjhIqMY")],
  silence: ["Clip 5: Creating in Silence", DRIVE("17_Tuhpcnu8wvNfz-zq6UUbIb1B8Hjysy")],
  check: ["Clip 6: Checks and assists students", DRIVE("1WelO1tlls0txZi2ZjX0Db6Rem01wrFq0")],
  speak: ["Clip 7: Public Speaking for Book Show", DRIVE("1_vt-s-D_Wqpv8BDhArUc-sMm3ptYprRN")],
  pitch1: ["Student book pitch: “The Big Adventure”", "video/pitch-big-adventure.mp4"]
};
const DOCS = {
  slides: ["8-Lesson Program Slides 2026 (PDF)", DRIVE("1ifKuYI8oU-dGlH8lyYlyeg6EEH6seJpi")],
  a3: ["Backup A3 printed slides (PDF)", DRIVE("1UWw-CPR8fH3xutrh7uF4Qy1YR98N3Ahe")],
  mini: ["Mini Book handout", DRIVE("18LbDQWsn64-vQcRAwvOANh--OcMJ9eYH")],
  game: ["Story Game Sheet", DRIVE("12oF6tZrSDCCu4x8KkOxX1zQrozUMZ1VM")],
  guide3: ["Guide: Teach the 3-Act Story Method so students finish the Mini Book", "https://docs.google.com/document/d/11BKPtEmFO7LN0HhClWwZOycjn1jbmKDdWwhLB0c07Y8/edit"],
  process: ["My Tiny Star Progress Sheet", DRIVE("1Hc5QYsf_A0bNVac2LvajHpwGo1VDTsUf")],
  tracker: ["Teacher Classroom Tracker with weekly goals (PDF)", "scripts/classroom-tracker-with-goals.pdf"],
  goals8: ["Weekly Goals map: 8 lessons", DRIVE("1_gaEh0Sqr1ohhRCqg9T1V8fHBJl-xjxC")],
  pubForm: ["Publishing and After Publishing Form", DRIVE("1BGZY3XTWbZR1zmX0Fqyex2uW1lZEi7kK")],
  emails: ["Emails to Parents folder", "https://drive.google.com/drive/folders/1nWrOYZAlW7MWoGQae1AcZ_kTTnoGC6qf"]
};

const MEDITATION = ["Sit comfortably.", "Close your eyes if you would like.", "Take a slow breath in.", "And slowly breathe out.", "Imagine opening a magical door.", "Behind the door is your story.", "Who is there?", "What do they look like?", "What adventure is waiting for them?", "Take one more deep breath.", "When you are ready, open your eyes.", "Today we begin bringing that story to life."];
const RULES = ["Before we begin, let's review our classroom rules. At Tiny Star, we have four important rules.", "Number one: Respect. We respect ourselves, others, and our creative materials.", "Number two: Listening. When someone is speaking, we listen.", "Number three: Asking. If you have a question or would like to share, raise your hand.", "Number four: Try our best. We do not need to be perfect. We simply try our best every day.", "When you try your best, you can earn six types of stickers. Let's see how many stickers you can win today!"];
const CLEANUP = ["Authors, it's time to clean up.", "Please put your pages in your folder.", "Pencils, markers and erasers go back in the pencil boxes.", "Please clean your table and the floor under your table.", "Now let's line up quietly. I will dismiss each of you to your grown-up."];
const SILENCE = ["Now we're going to play a game called Creating in Silence.", "For the next ten minutes, our classroom will be completely quiet so everyone can focus on their own ideas.", "Remember: no talking.", "If you have a question, write it on your note sheet, then quietly raise your hand. I'll come help you.", "Take a deep breath, and let the silence help your imagination. Ready? Let's begin!"];

/* Personal follow-up helpers */
function behindEmail(n, goalText, homeTip) {
  return {
    title: "Personal email: student did not reach the Lesson " + n + " goal",
    when: "Send within 24 hours, to one family only (never two families in one email).",
    subject: "Tiny Star Update for [Student]",
    body:
"Dear [Parent's Name],\n\n" +
"I wanted to share a quick update about [Student]'s progress in today's Tiny Star class. [Student] [one specific positive: e.g. shared a wonderful idea / worked hard on the illustrations].\n\n" +
"This week's goal was " + goalText + ". Right now, [Student] has [what is finished, e.g. 1 of 3 story pages], so [he/she] is [number] page(s) behind our schedule.\n\n" +
"In class, I [support you already gave, e.g. sat with [Student] to plan the next page / paired [him/her] with a classmate helper].\n\n" +
"Could you please help [Student] " + homeTip + " before our next class? About [15–20] minutes a day for [2–3] days is usually enough. [He/She] has the pages in [his/her] folder.\n\n" +
"Thank you for your support. I'm confident [Student] can catch up, and I look forward to seeing [him/her] next week!\n\n" +
"Warm regards,\n[Your Name]\nTiny Star Certified Teacher\n[Phone] · [Email]"
  };
}
function textMsg(n, goalShort) {
  return "Hi [Parent's Name], this is [Your Name], [Student]'s Tiny Star teacher. [Student] did great work today! This week's goal is " + goalShort + ", and [he/she] still needs to finish [what's left]. I just emailed you a few simple tips. Could you help [him/her] finish before Lesson " + (n + 1) + "? Thank you! 🌟";
}
function callScript(goalShort) {
  return [
    "Hi, is this [Parent's Name]? This is [Your Name], [Student]'s Tiny Star teacher. Do you have two minutes?",
    "First, I want to tell you something great: [one specific positive from today].",
    "This week, every young author is working on " + goalShort + ". [Student] has finished [what is done], and still needs [what is left].",
    "In class, I [support you gave]. At home, the most helpful thing is [one simple step].",
    "Does that sound doable this week? Is there anything that makes it hard for [Student] right now?",
    "Thank you so much. I'm also sending a short email with the details. See you next week!"
  ];
}

const LESSONS = [
/* ---------------- BEFORE ---------------- */
{
  id: "before", nav: "Before the Program Starts", label: "0",
  title: "Before the Program Starts",
  eyebrow: "One week before Lesson 1",
  objective: "Get your site, materials, families and yourself ready, so Lesson 1 starts calm, warm and on time.",
  collects: null,
  flow: [
    ["Day 7 before", "Send the “Before the Program Starts” email to all families. Create a Google Contacts group for your class's parents."],
    ["Days 6–2", "Watch the classroom videos. Practice the scripts in this course aloud."],
    ["At least 1 day before", "Site visit: parking, walking time, restrooms, emergency exits, classroom access, dismissal location."],
    ["At least 1 day before", "Check your Teaching Suitcase (from joy@thetinystar.com) has all the materials. Prepare music and slides."],
    ["Lesson day", "Arrive 15 minutes early (never less than 10). Wear your apron. Set up groups of 3–4. Play soft music and welcome each student by name."]
  ],
  goals: [
    "Every family received the “Before the Program Starts” email 7 days ahead.",
    "You know the room, parking, exits and dismissal procedure.",
    "Your suitcase, printed handouts and printed Classroom Tracker are ready.",
    "You can say the meditation, rules and Lesson 1 lecture warmly without notes."
  ],
  checklist: [
    "Watch the Classrooms Intro Video and the classroom clips.",
    "Confirm your format with the Tiny Star Office: 60 min (10 lessons), 90 min (8 lessons) or 120 min (8 lessons).",
    "Send the “Before the Program Starts” email 7 days before Lesson 1.",
    "Create a Google Contacts group for your class's parents.",
    "Visit the teaching location at least one day before the first class.",
    "Collect your Tiny Star suitcase and apron; check stickers, pencils, markers, erasers, name cards, notepad paper.",
    "Contact joy@thetinystar.com to receive your Teaching Suitcase with all the teaching materials.",
    "Get the authorized caregiver list for pickup.",
    "Log in to the Tiny Star App and practice check-in and check-out. Try the Tiny Star Scanner so you can show students how to scan and submit their pages.",
    "Write your own sample story (3 Acts + Try, Try, Try). You will perform it in Lesson 1.",
    "Save the Tiny Star Office contact: 857-832-8338 · joy@thetinystar.com"
  ],
  slides: [
    ["s1.jpg", "Opening slide: Write It, Draw It, Publish It"],
    ["s2.jpg", "The finished book: 23 pages (front cover, title page, dedication page, 18 story pages, author page, back cover)"],
    ["s3.jpg", "After 8 lessons: published on Amazon in 170+ countries"]
  ],
  foundations: true,
  scripts: [
    { title: "Young Author Meditation (opens every lesson)", lines: MEDITATION },
    { title: "The four classroom rules", lines: RULES },
    { title: "Creating in Silence (used in every lesson)", lines: SILENCE },
    { title: "Reflection & cleanup (ends every lesson)", lines: CLEANUP }
  ],
  tracker: {
    intro: "The Classroom Tracker is a printed form with one row per student and one column per lesson. After every class you write, for each student: the pages finished, how many pages behind today's goal (if any), and any behavior to note. It tells you exactly who needs a personal email, call or text.",
    howto: [
      "Before Lesson 1: write every student's name in the first column of both tracker pages (2-1 covers Lessons 1–4, 2-2 covers Lessons 5–8).",
      "During the last Creating Time of each lesson: walk the room, check each student's pages, take one progress photo per student.",
      "In each lesson cell, write ✓ if the student met today's goal. If not, write how many pages the student has finished (for example “5 of 7 pages”).",
      "Add a short behavior note only for observable facts (e.g. “left seat 3×, seat change”).",
      "Circle every student who is behind or had a behavior concern. Each circled student gets a personal email + call or text within 24 hours."
    ],
    legend: [["Bruce: ✓", "Goal met"], ["Emma: 1 of 3 pages", "Goal not met: write how many pages she finished"]],
    example: null,
    practice: null
  },
  emails: {
    standard: {
      title: "“Before the Program Starts” email",
      when: "Send to all families 7 days before Lesson 1.",
      subject: "Tiny Star Young Author Lab begins on [Day, Date]",
      body:
"Dear Parents,\n\n" +
"Welcome to the Tiny Star [Season] Program and the [Community] Young Author Community! We are delighted to have your child join us for an exciting [8/10]-week journey of storytelling, illustrating, creating, and building confidence!\n\n" +
"PROGRAM INFORMATION\n" +
"The program begins on [Day, Date], from [time] at [School, room].\n" +
"Class dates: [list all dates]\n" +
"Instructor: [Your Name] · [Email] · [Phone]\n" +
"Teaching Assistant: [TA Name] · [Email] · [Phone]\n" +
"If you have any questions, please feel free to contact us.\n\n" +
"Snacks: Please pack enough snacks for your child to enjoy during the after-school program.\n\n" +
"Pickup arrangements: If someone other than a parent will pick up your child, please text [Your Name] ([Phone]) at least 24 hours before pickup, with your child's full name and the full name of the person authorized to pick them up.\n\n" +
"WHAT YOUR CHILD WILL CREATE\n" +
"During the program, your child will create an original 23-page picture book with a registered ISBN. By the end of the program, the book will be prepared for publication and worldwide distribution through Amazon, reaching readers in more than 170 countries. The publishing fee is already included in your tuition.\n\n" +
"TO SUCCESSFULLY COMPLETE THE BOOK\n" +
"Each young author must reach a specific creative milestone each week. Please review the weekly goals and encourage your child to complete any catch-up work at home.\n\n" +
"PRE-PROGRAM SURVEY\n" +
"The Tiny Star 4C Method is designed to boost children's confidence and creator identity. Please take three minutes to complete this brief pre-program survey: [survey link]\n\n" +
"PARENT PERMISSION\n" +
"If you have not signed the permission form yet, please complete it here: [permission form link]\n\n" +
"STAY CONNECTED\n" +
"Join our Facebook group, Kids Create & Publish, for updates, photos and reminders: [Facebook link]\n" +
"Follow Tiny Star on Instagram: [Instagram link]\n\n" +
"Thank you! We look forward to an inspiring and memorable program with your children!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [
      {
        title: "Special situation: reporting misbehavior (use any week)",
        when: "Only after classroom steps (reminder → private talk → seat change). Facts only. Within 24 hours. One family per email.",
        subject: "Tiny Star Update for [Student]",
        body:
"Dear [Parent's Name],\n\n" +
"I hope this email finds you well. I wanted to share an incident that occurred in our “Write It, Draw It, Publish It” class on [date], involving [Student].\n\n" +
"During class, [describe only what you saw and heard, e.g. “[Student] had a disagreement with a partner and tore up two of [his/her] own pages”].\n\n" +
"I [what you did, e.g. “asked to talk with [him/her] privately, explained the importance of respecting classmates and teachers, and helped the two students apologize and reconcile”].\n\n" +
"I wanted to make sure you were aware, so we can work together to support [Student] in learning from this experience. With our combined encouragement, I believe [he/she] will continue to thrive and find positive ways to handle frustration.\n\n" +
"Thank you for your understanding and partnership.\n\n" +
"Warm regards,\n[Your Name]\nTiny Star Certified Teacher"
      }
    ],
    text: null, call: null
  },
  videos: ["intro", "set2", "set3", "v4c"],
  docs: ["slides", "a3", "tracker", "goals8", "emails"]
},

/* ---------------- LESSON 1 ---------------- */
{
  id: "lesson-1", nav: "Lesson 1 · Story & Mini Book", label: "1",
  title: "Lesson 1: Story & Mini Book",
  eyebrow: "Program Lesson 1 · 90 minutes",
  objective: "Every student writes their whole story on the Mini Book pages.",
  collects: "Mini Book sheet",
  flow: [
    ["5 min", "Welcome + Young Author Meditation"],
    ["10 min", "Classroom rules & introductions (2 students)"],
    ["5 min", "Teacher Lecture: the 3 Acts Method"],
    ["5 min", "Act 1 + Creating with Music 1; teacher & TA check and assist"],
    ["15 min", "Teacher Lecture: Mini Book pages, then Creating Time"],
    ["20 min", "Break Time (Night at the Museum, Musical Chairs, Red Light Green Light)"],
    ["20 min", "Creating with Classical Music 2 (10) + Creating in Silence (10)"],
    ["10 min", "Reflection, Classroom Tracker & cleanup"]
  ],
  goals: [
    "Every student finishes the whole story on the Mini Book (story pages 1, 3, 5 … 17, written on the ★ side).",
    "Every story has a character, beginning, problem, Try-Try-Try middle and an ending.",
    "This is the most challenging goal of the program. In a 1-hour class it is normal for 1–3 of 10 students to need more time, so follow up the same day."
  ],
  goalTotals: "Mini Book complete · 0 book pages yet",
  slides: [
    ["s5.jpg", "Lesson 1 overview: About Me → Story in 3 Acts → Mini Book → Game Time → Homework"],
    ["s6.jpg", "Story in 3 Acts: Act 1 who, when, where, what · Act 2 problem · Act 3 try, try, try"],
    ["s7.jpg", "Sample Mini Book pages: drawing pages and writing pages"],
    ["minibook-real.jpg", "The real Mini Book: each student gets a small blank notebook to write the whole story in"]
  ],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today is a very exciting day, because today we begin creating a real book.", "Raise your hand if you have ever written a story before.", "Wonderful. Whether this is your first story or your hundredth story, every author starts the same way: with an idea.", "At Tiny Star, we don't just write stories. We become creators.", "Let's take one minute to get our minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Classroom rules", lines: RULES },
    { title: "Teacher Lecture: the 3 Acts Method", lines: ["Today I am going to teach you a storytelling secret that many authors use. It is called the 3 Acts Method.", "Most stories have three parts.", "Act 1 is the beginning. This is where we meet the character. Who is the character? Where are they? When does the story happen? What are they doing?", "Act 2 is the problem. Then something happens. A problem appears. If there is no problem, there is usually no story.", "Act 3: solve the problem. The character tries one way. It doesn't work. They try another way. It doesn't work. They try a third way. This time it works!", "And at the ending, we ask one final question: what did the character learn?"] },
    { title: "Example story: Jen and Rubby", lines: ["Jen is a dark-colored puppy with big round eyes. He is happily playing with his favorite toy, Rubby.", "When playtime is over, Jen cannot find Rubby. He looks everywhere. He starts to worry.", "First, Jen searches around the house. But he cannot find Rubby.", "Next, he searches in the yard. He sees many things, but not Rubby.", "Finally, he notices a clue near the bedroom window. He looks under the brush. There is Rubby! The problem is solved.", "What did Jen learn? Jen learns to be responsible and to put away his favorite toy after playing."] },
    { title: "Guiding WHO, WHEN, WHERE, WHAT, PROBLEM (one at a time)", lines: ["Who is in your story? Is your character a human or an animal? What is their name? How old are they? What are they wearing?", "If you finish your WHO, raise your hand.", "When does your story happen? Is it morning, afternoon or evening? What time is it? What season?", "Where does your story happen? At home? At school? Which room? What does it look like?", "What is your character doing when the story begins, before the problem appears?", "Now, what problem happens in your story? Take your time. Think. Then write it down."] },
    { title: "Teacher Lecture: the Mini Book", lines: ["Now that you all have your characters, we will write your story on these Mini Book pages.", "These pages are your book's mini model. Today you will write your story on pages 1, 3, 5, 7, 9, 11, 13, 15 and 17.", "Step 1: find the star sign. Only write your story in the boxes with the star.", "Step 2: when you finish writing your story, raise your hand.", "Step 3: I will check your grammar, spelling, story development and missing details."] },
    { title: "Creating in Silence", lines: SILENCE },
    { title: "Reflection", lines: ["Today we took the first step toward becoming published authors.", "Raise your hand if you discovered a story today.", "If your Mini Book is not finished yet, please finish it at home before our next class.", "Next week we will begin to illustrate your story. You can research what your characters look like before the next class.", "Remember: great books don't start perfectly. Great books start with an idea in your mind, written on paper.", "Let's give ourselves a round of applause. Authors, thank you for your hard work today!"] },
    { title: "Cleanup & dismissal", lines: CLEANUP }
  ],
  teach: `<h3>Use small pieces of guidance</h3>
    <p>Give each student notepad paper. Do not lecture the whole structure at once. For each element (WHO → WHEN → WHERE → WHAT → PROBLEM): ask one specific question, invite 1–2 students to share, then give everyone time to write. When most hands are up, move to the next element.</p>
    <p>Fast finishers help a partner. You help the students who need it most, and you assign others to your TA. <b>Don't</b> start by guiding students one by one, or you won't have time to take the whole class through all five elements.</p>
    <p>Then perform your own story's <b>Try 1 → doesn't work, Try 2 → doesn't work, Try 3 → it works!</b>, and hand out the Mini Book. Students with no idea yet use the <b>Story Game Sheet</b> (pick a number 1–6 for character, setting, problem and magic object).</p>
    <p><b>When a student is stuck:</b> brainstorm “10 things that could happen”, write the ending first, or “pick a noun + add an adjective” (a chatty fox, a magical backpack).</p>`,
  tracker: {
    goal: "Mini Book: whole story written (story pages 1–17 on the ★ side)",
    example: [
      ["Mia", "✓", "—"],
      ["Leo", "4 of 9 parts", "Email + call/text"],
      ["Ava", "✓", "—"],
      ["Noah", "3 of 9 parts", "Email + call/text · send Story Game Sheet home"],
      ["Zoe", "✓", "—"]
    ],
    practice: {
      prompt: "End of Lesson 1. Which students need a personal email plus a call or text today?",
      students: [
        ["Mia", "Mini Book finished; teacher checked spelling.", false],
        ["Leo", "Wrote P1–P7, ran out of time before Try 3 and the ending.", true],
        ["Ava", "Finished, and helped a classmate as a Tiny Star Helper.", false],
        ["Noah", "Has a character and setting, but no problem yet.", true],
        ["Zoe", "Finished; called out 3 times but stopped after one reminder.", false]
      ],
      why: "Leo and Noah are behind the Lesson 1 goal, so they need a personal email plus a call or text tonight. Zoe met the goal, and one reminder fixed her behavior, so it is a tracker note only, not a parent email."
    }
  },
  emails: {
    standard: {
      title: "After Lesson 1: weekly email to all families",
      when: "Send within 1 day after Lesson 1.",
      subject: "Write It, Draw It, Publish It – Week 1 Goal: Finish the Mini Book",
      body:
"Dear Parents,\n\n" +
"Welcome to the Tiny Star Young Authors Community!\n\n" +
"Your children did a fantastic job in Lesson 1! They have begun an exciting journey to create a 23-page, ISBN-registered picture book that will be published and distributed through Amazon in more than 170 countries by the end of this eight-lesson program.\n\n" +
"To reach this goal, students complete specific writing and illustration tasks each week. Please encourage and remind your child to finish the Mini Book before Lesson 2. The Mini Book is a two-page sheet with 9 writing sections. (These nine sections will gradually become 18 story pages: nine written pages and nine matching illustration pages.)\n\n" +
"If your child wants to write 18 pages instead of 9, each page of the book will include both writing and an illustration. Please consider whether your child can complete this within the 8-week program and help them plan. Completing a project on time is an important skill your child will practice with us. If your child commits to this plan, we would love to see the Mini Book with all 18 writing sections completed before Lesson 2.\n\n" +
"PARENT PERMISSION\nIf you have not signed the permission form yet, please complete it here: [permission form link]\n\n" +
"Join our Facebook group, Kids Create & Publish, for updates, photos and reminders: [Facebook link]\n\n" +
"We look forward to helping every young author write, draw, and publish their own book!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [
      behindEmail(1, "to finish writing the whole story in the Mini Book (9 writing sections)", "finish the Mini Book at home. A great way is to ask, “What happens next? What does your character try? Does it work?” and let [him/her] write the answers in the empty boxes"),
      {
        title: "Personal email: student can't find a story yet",
        when: "Same day. Give the family a concrete plan so the child arrives at Lesson 2 ready.",
        subject: "Helping [Student] Start [His/Her] Book",
        body:
"Dear [Parent's Name],\n\n" +
"Welcome to the Tiny Star Young Authors Community! Today [Student] began the exciting journey of creating [his/her] own book.\n\n" +
"[Student] has wonderful strengths: [e.g. [he/she] is very good at drawing and coloring]. Today [he/she] had trouble choosing a story idea, which is very common in Lesson 1.\n\n" +
"Here are two easy ways to help at home before our next class:\n" +
"1. Use the Story Game Sheet in [his/her] folder: pick a number 1–6 for the character, setting, problem and magic object, then talk together about what could happen.\n" +
"2. Ask [Student] what [he/she] loves (for example animals, cooking or sports). A book can grow from a favorite topic. [He/She] can even make a non-fiction book, like a cookbook with favorite recipes.\n\n" +
"The goal for Lesson 1 is a finished Mini Book: nine short writing sections that become the map for the whole book. If you agree on an idea, you're welcome to write a short draft together and send it with [Student] to class.\n\n" +
"Thank you for supporting [Student]'s creative journey!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
      },
      {
        title: "Personal email: story uses copyrighted characters",
        when: "As soon as you notice (Lesson 1 or 2). Reassure: the student does not need to start over.",
        subject: "A Quick Note About [Student]'s Story",
        body:
"Dear [Parent's Name],\n\n" +
"I wanted to share a quick note about [Student]'s story. We are so happy to see how excited and creative [he/she] is with [his/her] [e.g. Pokémon]-inspired book.\n\n" +
"Because [those] characters, names and images are protected intellectual property, we cannot publish a book that uses them through Amazon without permission from the rights holder.\n\n" +
"The good news is that [Student] does not need to start over. [He/She] can keep the basic story idea and turn it into an original book: create [his/her] own characters and names, redesign their look and special abilities, and invent [his/her] own world, while keeping the adventure and story structure [he/she] has already developed.\n\n" +
"Could you please talk about this with [Student] at home and help [him/her] start imagining original characters before our next class? We will also support [him/her] in class. Lesson 2's goal is to write and draw the first 3 story pages.\n\n" +
"Thank you very much for your support. We are excited to see what [Student] creates!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
      }
    ],
    text: textMsg(1, "a finished Mini Book (the whole story in 9 boxes)"),
    call: callScript("finishing the Mini Book, which means writing the whole story in the 9 boxes")
  },
  videos: ["med", "lect"],
  docs: ["guide3", "game"]
},

/* ---------------- LESSON 2 ---------------- */
{
  id: "lesson-2", nav: "Lesson 2 · Story Pages", label: "2",
  title: "Lesson 2: Story Pages",
  eyebrow: "Program Lesson 2 · 90 minutes",
  objective: "Students create their first 3 story pages.",
  collects: "The first 3 story pages",
  flow: [
    ["4 min", "Welcome + Young Author Meditation"],
    ["1 min", "Classroom rules review"],
    ["10 min", "Teacher Lecture & demo: how to give feedback; Share & Feedback"],
    ["15 min", "Teacher Lecture: how to create story pages + Creating with Music 1"],
    ["20 min", "Break Time"],
    ["10 min", "Creating in Silence"],
    ["20 min", "Creating with Music 2 + teacher check, Classroom Tracker & progress photo"],
    ["10 min", "Reflection & cleanup"]
  ],
  goals: [
    "Every student completes story pages 1, 2 and 3.",
    "Students ask for and give feedback with the three Tiny Star questions.",
    "Students write in pencil first, get the teacher's check, then trace with marker."
  ],
  goalTotals: "3 story pages · 3 total pages",
  slides: [
    ["s8.jpg", "Lesson 2 overview: Feedback → Mini Book → Pages 1, 2, 3 → Game Time"],
    ["s9.jpg", "Ask for Feedback: the three questions, and “Thank you for your feedback!”"],
    ["s10.jpg", "Story pages: drawings on one page, writing on the other, page numbers on both"],
    ["s11.jpg", "Sample story page from a real student book"]
  ],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today is a very exciting day, because today we begin creating the first story pages of your book.", "Raise your hand if your story is completed.", "Wonderful. If you need more time to finish your Mini Book, you can finish it later.", "Let's take three minutes to get our creators' minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Teacher Lecture: Share and Give Feedback", lines: ["Today two authors will share their stories, and we will practice giving feedback.", "When you share, you ask three questions.", "Do you like my story? Why?", "Is there anything you don't like?", "What is one suggestion to make my story better?", "And when you finish, you always say: Thank you for your feedback."] },
    { title: "Teacher Lecture: How to Create the Story Pages", lines: ["Now we will create your first story pages.", "One: write your words in pencil first.", "Two: when you finish, raise your hand and wait for me to check your work.", "Three: after I approve your writing, carefully trace over the words with a marker.", "Four: do not use your marker until your writing has been checked.", "Keep your drawing and writing away from the edges of the page, so nothing gets cut off when we print your book.", "Remember to add the page number, and keep it away from the edge too."] },
    { title: "Creating in Silence", lines: SILENCE },
    { title: "Reflection", lines: ["Raise your hand if you finished three story pages today.", "Let's give ourselves a round of applause. Authors, thank you for your hard work today!", "Next week we will create our first special page: the Dedication Page. Talk with your family or a good friend about who your book will be dedicated to."] }
  ],
  teach: `<p>Hand out the <b>Progress Sheet</b> so students color a box for each finished page. Seat early finishers next to a classmate who needs help. During Music time 2, check every student's pages, fill in the tracker and take one progress photo per student.</p>
    <p><b>After Lesson 2, no major story changes:</b> students refine their story; they don't start a new one.</p>`,
  tracker: {
    goal: "Story pages 1–3 (3 pages)",
    example: [
      ["Mia", "✓", "—"],
      ["Leo", "✓", "—"],
      ["Ava", "✓", "—"],
      ["Noah", "1 of 3 pages", "Email + call/text"],
      ["Zoe", "2 of 3 pages", "Email + call/text (also the torn page)"]
    ],
    practice: {
      prompt: "End of Lesson 2 (goal: 3 story pages). Who needs a personal email plus a call or text?",
      students: [
        ["Mia", "Story pages 1–3 done, checked and traced in marker.", false],
        ["Leo", "Finished the Mini Book at home, and pages 1–3 in class.", false],
        ["Ava", "Pages 1–4 done; asked for more work.", false],
        ["Noah", "Only page 1 done; spent a long time on one drawing.", true],
        ["Zoe", "Pages 1–2 done; tore a page after a disagreement.", true]
      ],
      why: "Noah is 2 pages behind. Zoe is 1 page behind, and her behavior needs a factual note to parents. Ava is ahead: give her a sticker and an extension activity."
    }
  },
  emails: {
    standard: {
      title: "After Lesson 2: weekly email to all families",
      when: "Send within 1 day after Lesson 2.",
      subject: "Write It, Draw It, Publish It – Week 2 Goal: 3 Story Pages",
      body:
"Dear Young Authors' Parents,\n\n" +
"We have completed Lesson 2! Students shared their stories and learned how to ask for and give feedback. Everyone participated actively, and several students received six or more feedback stars!\n\n" +
"During Lesson 2, students learned how to create the first pages of their books. The goal for Week 2 is to complete three story pages. Some students brought home blank 8.5\" × 8.5\" pages and a frame. Please remind and support your child to complete three story pages.\n\n" +
"Please keep these guidelines in mind:\n" +
"1. Use the frame. It keeps the pages inside the printing area, so publishing goes smoothly.\n" +
"2. Make the text easy to read. Each line should have no more than 7 words.\n" +
"3. Complete all the writing pages first, before adding illustrations.\n" +
"4. Check spelling before adding color. Write in pencil first, make sure all spelling is correct, then trace over the writing with a black or colored marker.\n\n" +
"PARENT PERMISSION\nIf you have not signed the permission form yet, please complete it here: [permission form link]\n\n" +
"Join our Facebook group, Kids Create & Publish: [Facebook link]\nFollow Tiny Star on Instagram: [Instagram link]\n\n" +
"Warm regards,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [behindEmail(2, "to complete story pages 1, 2 and 3", "finish the missing story page(s): write in pencil first, check spelling, then trace with marker, keeping everything inside the frame")],
    text: textMsg(2, "3 story pages"),
    call: callScript("story pages 1, 2 and 3")
  },
  videos: ["feed", "feed2"],
  docs: ["process", "tracker"]
},

/* ---------------- LESSON 3 ---------------- */
{
  id: "lesson-3", nav: "Lesson 3 · Dedication Page", label: "3",
  title: "Lesson 3: Dedication Page",
  eyebrow: "Program Lesson 3 · 90 minutes",
  objective: "Students create the dedication page and 3 more story pages.",
  collects: "The dedication page and 3 story pages",
  flow: [
    ["4 min", "Welcome + Young Author Meditation"],
    ["1 min", "Classroom rules review"],
    ["10 min", "Share & Feedback"],
    ["15 min", "Teacher Lecture: how to create the dedication page + Creating with Music 1"],
    ["20 min", "Break Time"],
    ["10 min", "Creating in Silence"],
    ["20 min", "Creating with Music 2 + teacher check, Classroom Tracker & progress photo"],
    ["10 min", "Reflection & cleanup"]
  ],
  goals: [
    "Every student completes the dedication page.",
    "Every student completes story pages 4, 5 and 6.",
    "Running total by the end of this lesson: 6 story pages + dedication page = 7 pages."
  ],
  goalTotals: "6 story pages · 7 total pages",
  slides: [["s14.jpg", "Dedication page samples: “To my mom…”, “To my dad…”, “I dedicate this book to my mom”"]],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today is a very exciting day! You will make a special decision: who you want to dedicate your book to.", "Now, let's take three minutes to get our creators' minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Teacher Lecture: the Dedication Page", lines: ["Now we will create your dedication page.", "Your book could be a gift for someone you love: your mom, dad, grandparents, brother, sister, teacher, best friend, or even your pet!", "Think about someone who makes your life brighter or inspires you.", "Who would you like to surprise with your very own published book?", "Wonderful. Let's create it."] },
    { title: "Creating in Silence", lines: SILENCE },
    { title: "Reflection", lines: ["Raise your hand if you finished your dedication page and three story pages today.", "Let's give ourselves a round of applause. Authors, thank you for your hard work today!", "Next week we will create the first page of the book: the Full Title Page. What is a full title page? You will find out, and create it, in our next class!"] }
  ],
  teach: `<p>Keep the dedication short: one or two sentences plus a small drawing. Students who finish quickly go straight to story pages 4–6.</p>`,
  tracker: {
    goal: "Dedication page + story pages 4–6 (total 7 pages)",
    example: [
      ["Mia", "✓", "—"],
      ["Leo", "5 of 7 pages", "Email + call/text"],
      ["Ava", "✓", "—"],
      ["Noah", "4 of 7 pages", "Email + call/text · tell the office if no progress next week"],
      ["Zoe", "✓", "—"]
    ],
    practice: {
      prompt: "End of Lesson 3 (goal: 7 total pages). Who needs a personal email plus a call or text?",
      students: [
        ["Mia", "7 pages total.", false],
        ["Leo", "5 pages total; dedication done, only story page 4.", true],
        ["Ava", "8 pages total.", false],
        ["Noah", "4 pages total; caught up a little but still far behind.", true],
        ["Zoe", "7 pages total.", false]
      ],
      why: "Leo is 2 pages behind and Noah is 3 behind. Noah has been behind for three weeks, so in your email ask the family for a specific home plan, and let the Tiny Star Office know if it continues."
    }
  },
  emails: {
    standard: {
      title: "After Lesson 3: weekly email to all families",
      when: "Send within 1 day after Lesson 3.",
      subject: "Write It, Draw It, Publish It – Week 3 Goal: 7 Pages",
      body:
"Dear Young Authors' Parents,\n\n" +
"Our young authors have completed Lesson 3! The goal for Week 3 is to complete four new pages, bringing the total to seven completed pages.\n\n" +
"Students learned how to create a dedication page, and practiced focused, independent work through a silent game, “Creating in Silence”: everyone kept working quietly for 10 minutes, and the first person to speak would lose. Everyone worked so quietly and focused so well!\n\n" +
"Before Lesson 4, each student should have seven pages in total: one dedication page and six story pages (including the three pages completed in Lesson 2).\n\n" +
"If your child is behind, please help them catch up before the next lesson. Creating alongside your child can be a meaningful and rewarding experience. Please enjoy this special journey together!\n\n" +
"If you have any questions or need support, please contact me anytime. Together, we will support your child's author journey and personal growth.\n\n" +
"Join our Facebook group, Kids Create & Publish: [Facebook link]\nFollow Tiny Star on Instagram: [Instagram link]\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [
      behindEmail(3, "the dedication page plus story pages 4, 5 and 6 (7 pages in total)", "finish the missing page(s), starting with the writing, then the illustrations"),
      {
        title: "Special situation: a student leaves the program",
        when: "When a family tells you their child is dropping. Warm, no pressure; invite feedback and a return.",
        subject: "We'll Miss [Student] at Tiny Star",
        body:
"Dear [Parent's Name],\n\n" +
"We're sorry to see [Student] leave Write It, Draw It, Publish It!\n\n" +
"This program is designed to be a fun and rewarding creative journey. By the end, students become published young authors, with their books available to readers in more than 170 countries through Amazon. Along the way they build future-ready skills: visualization, storytelling, writing, public speaking, giving feedback, active listening and finishing a project. There can be moments of frustration as well as excitement, and that process makes the final achievement even more meaningful.\n\n" +
"We would greatly appreciate your feedback on [Student]'s experience. We take every comment seriously and use it to improve our program.\n\n" +
"We would also love to welcome [Student] back. If [he/she] needs help catching up, I'd be happy to offer support, and [he/she] is warmly invited to join our next session: [session details].\n\n" +
"Thank you for being part of the Tiny Star creative community. We truly hope to see [Student] again soon!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
      }
    ],
    text: textMsg(3, "the dedication page + story pages 4–6 (7 pages total)"),
    call: callScript("the dedication page and story pages 4 to 6, which makes 7 pages in total")
  },
  videos: ["silence"],
  docs: ["tracker", "goals8"]
},

/* ---------------- LESSON 4 ---------------- */
{
  id: "lesson-4", nav: "Lesson 4 · Full Title Page", label: "4",
  title: "Lesson 4: Full Title Page",
  eyebrow: "Program Lesson 4 · 90 minutes",
  objective: "Students create the full title page and 3 more story pages.",
  collects: "The full title page and 3 story pages",
  flow: [
    ["4 min", "Welcome + Young Author Meditation"],
    ["1 min", "Classroom rules review"],
    ["6 min", "Share & Feedback"],
    ["15 min", "Teacher Lecture: how to create the Full Title Page + Creating with Music 1"],
    ["20 min", "Break Time"],
    ["10 min", "Creating in Silence"],
    ["20 min", "Creating with Music 2 + teacher check, Classroom Tracker & progress photo"],
    ["10 min", "Reflection & cleanup"]
  ],
  goals: [
    "Every student completes the full title page: full title, full name, drawings, and no page number.",
    "Every student completes story pages 7, 8 and 9.",
    "Running total: 9 story pages + dedication + full title page = 11 pages."
  ],
  goalTotals: "9 story pages · 11 total pages",
  slides: [
    ["s15.jpg", "Lesson 4 overview: Full Title Page → Story Pages 7, 8, 9 → Game Time"],
    ["s16.jpg", "Full Title Page vs. Front Cover: don't mix them up"],
    ["s17.jpg", "Full Title Page: 1 full title · 2 your full name · 3 drawings · 4 NO page number"]
  ],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today is a very exciting day! You will make the first page of your book. When your readers open your book, this will be the first page they see. We call it the Full Title Page.", "Now, let's take three minutes to get our creators' minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Teacher Lecture: the Full Title Page", lines: ["Now it's time to create your Full Title Page!", "This is the first page readers will see when they open your book. It tells everyone what your book is about and who created it.", "On this page, you will include your book title. Choose a fun, exciting or meaningful name.", "Your name: you are the author!", "And your main characters: draw the characters who will appear in your story.", "Please do not write a page number on this page.", "Make it colorful and exciting. It gives readers their very first look into your amazing book! Let's create it."] },
    { title: "Creating in Silence", lines: SILENCE },
    { title: "Reflection", lines: ["Raise your hand if you finished your Full Title Page and three story pages today.", "Let's give ourselves a round of applause. Authors, thank you for your hard work today!", "Next week we will create our most important page: the Front Cover. Talk with your family or a good friend about what your front cover will look like."] }
  ],
  teach: `<p>Use slide 16 to show the difference: the <b>full title page</b> is inside the book (title, name, characters, white background, no page number). The <b>front cover</b> (next week) has a series name and a fully colored background.</p>`,
  tracker: {
    goal: "Full title page + story pages 7–9 (total 11 pages)",
    example: [
      ["Mia", "✓", "—"],
      ["Leo", "✓", "Short thank-you note to the parent"],
      ["Ava", "✓", "—"],
      ["Noah", "8 of 11 pages", "Email + call/text · office informed"],
      ["Zoe", "9 of 11 pages", "Email + call/text"]
    ],
    practice: {
      prompt: "End of Lesson 4 (goal: 11 total pages). Who needs a personal email plus a call or text?",
      students: [
        ["Mia", "11 pages.", false],
        ["Leo", "11 pages; caught up after last week's email.", false],
        ["Ava", "12 pages.", false],
        ["Noah", "8 pages.", true],
        ["Zoe", "9 pages; the full title page has a page number written on it.", true]
      ],
      why: "Noah is 3 behind and Zoe is 2 behind. Ask Zoe to remove the page number from her full title page before she scans it. Leo deserves a quick positive note home: celebrate progress too!"
    }
  },
  emails: {
    standard: {
      title: "After Lesson 4: weekly email to all families",
      when: "Send within 1 day after Lesson 4.",
      subject: "Write It, Draw It, Publish It – Week 4 Goal: 11 Pages",
      body:
"Dear Tiny Star Young Author Families,\n\n" +
"Our young authors have completed Lesson 4! The goal for Week 4 is to complete four more pages, bringing the total to 11 completed pages.\n\n" +
"Students learned how to create their Full Title Pages and practiced independent work through a game called “Creating with Classical Music”: everyone focused on working for 10 minutes while listening to classical piano music. They worked so calmly and attentively!\n\n" +
"Before Lesson 5, students should have 11 pages in total:\n- One dedication page\n- One full title page\n- Nine story pages\n\n" +
"Please remind your young author to complete this self-check:\n" +
"1. Do not use colored pencils or crayons.\n2. Erase all pencil marks completely.\n3. Avoid tiny writing. Each line should have no more than seven words.\n4. Place page numbers inside the frame, not too close to the edge.\n\n" +
"If your family has enjoyed Tiny Star, would you consider sharing an honest review on our Google profile? [Google review link]\n\n" +
"Join our Facebook group, Kids Create & Publish, for updates, photos and video documentaries: [Facebook link]\n\n" +
"Thank you for your continued support in helping our young authors shine!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [behindEmail(4, "the full title page plus story pages 7, 8 and 9 (11 pages in total)", "finish the missing page(s). Please remember: no colored pencils or crayons, erase all pencil lines, and keep page numbers inside the frame")],
    text: textMsg(4, "the full title page + story pages 7–9 (11 pages total)"),
    call: callScript("the full title page and story pages 7 to 9, which makes 11 pages in total")
  },
  videos: ["music"],
  docs: ["tracker"]
},

/* ---------------- LESSON 5 ---------------- */
{
  id: "lesson-5", nav: "Lesson 5 · Front Cover", label: "5",
  title: "Lesson 5: The Front Cover",
  eyebrow: "Program Lesson 5 · 90 minutes",
  objective: "Students create the front cover and 3 more story pages.",
  collects: "The front cover and 3 story pages",
  flow: [
    ["4 min", "Welcome + Young Author Meditation"],
    ["6 min", "Share & Feedback"],
    ["25 min", "Teacher Lecture: how to create the Front Cover + Creating with Music 1"],
    ["20 min", "Break Time"],
    ["10 min", "Creating in Silence"],
    ["15 min", "Creating with Music 2 + teacher check, Classroom Tracker & progress photo"],
    ["10 min", "Reflection & cleanup"]
  ],
  goals: [
    "Every student completes the front cover: series name, book title, full name, background colors, and no page number.",
    "After writing and drawing, students remove the frame and fully color the background.",
    "Every student completes story pages 10, 11 and 12. Running total: 12 story pages + 3 special pages = 15 pages."
  ],
  goalTotals: "12 story pages · 15 total pages",
  slides: [
    ["s18.jpg", "Lesson 5 overview: Front Cover → Story Pages 10, 11, 12 → Game Time"],
    ["s19.jpg", "Front Cover: 1 series name · 2 book title · 3 your full name · 4 background colors · NO page number"],
    ["s20.jpg", "After writing and drawing the front cover, remove the frame and fully color the background"]
  ],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today is a very exciting day! You will make the front cover of your book. This is the page readers see first, even on Amazon.", "Now, let's take three minutes to get our creators' minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Teacher Lecture: the Front Cover", lines: ["Now it's time to create your Front Cover!", "This is the page readers will see on Amazon. It tells everyone what your book is about and who created it.", "On this page, you will include: the series name, your book title, your full name, your main characters, and a background design with color.", "Do not write a page number on the cover.", "After you write and draw, remove the frame and fully color the whole background.", "Make your title big, clear and impressive! Let's create it."] },
    { title: "Creating in Silence", lines: SILENCE },
    { title: "Reflection", lines: ["Raise your hand if you finished your front cover and three story pages today.", "Let's give ourselves a round of applause. Authors, thank you for your hard work today!", "Next week we will create our proudest page: the About the Author page. Talk with your family or a good friend about what you want readers to know about you."] }
  ],
  teach: `<p>The front cover takes the most time of any page: plan 25 minutes for it. Check that the title is large and readable from across the room, and that no white background is left.</p>`,
  tracker: {
    goal: "Front cover + story pages 10–12 (total 15 pages)",
    example: [
      ["Mia", "✓", "—"],
      ["Leo", "13 of 15 pages", "Email + call/text"],
      ["Ava", "✓", "—"],
      ["Noah", "12 of 15 pages", "Email + call/text · office"],
      ["Zoe", "✓", "—"]
    ],
    practice: {
      prompt: "End of Lesson 5 (goal: 15 total pages). Who needs a personal email plus a call or text?",
      students: [
        ["Mia", "15 pages; the cover is fully colored.", false],
        ["Leo", "13 pages; the cover background still has white areas.", true],
        ["Ava", "16 pages.", false],
        ["Noah", "12 pages.", true],
        ["Zoe", "15 pages.", false]
      ],
      why: "Leo and Noah are behind the 15-page goal. Leo's cover also isn't finished: it must be fully colored before he scans it."
    }
  },
  emails: {
    standard: {
      title: "After Lesson 5: weekly email to all families",
      when: "Send within 1 day after Lesson 5.",
      subject: "Write It, Draw It, Publish It – Week 5 Goal: 15 Pages",
      body:
"Dear Tiny Star Young Author Families,\n\n" +
"Our young authors have completed Lesson 5! Students learned how to create their Front Cover pages.\n\n" +
"Before Lesson 6, students should have 15 pages in total:\n- One front cover\n- One dedication page\n- One full title page\n- 12 story pages\n\n" +
"Please remind your young author to complete this self-check:\n1. The front cover has a fully colored background.\n2. The book title is large, clear, and impressive.\n\n" +
"ORDER AUTHOR COPIES\n" +
"Author copies make wonderful gifts for family and friends, local libraries, birthdays and holidays, and children around the world who may never have owned a storybook. [Local library partnership, if any.] Tiny Star partners with international organizations to donate our young authors' books to children and communities around the world.\n\n" +
"Please place your order for author copies using this form: [author copy order form link]\n\n" +
"Join our Facebook group, Kids Create & Publish: [Facebook link]\n\n" +
"Warm regards,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [behindEmail(5, "the front cover plus story pages 10, 11 and 12 (15 pages in total)", "finish the missing page(s). For the front cover, please make sure the whole background is colored and the title is big and clear")],
    text: textMsg(5, "the front cover + story pages 10–12 (15 pages total)"),
    call: callScript("the front cover and story pages 10 to 12, which makes 15 pages in total")
  },
  videos: ["check"],
  docs: ["tracker"]
},

/* ---------------- LESSON 6 ---------------- */
{
  id: "lesson-6", nav: "Lesson 6 · About the Author", label: "6",
  title: "Lesson 6: About the Author Page",
  eyebrow: "Program Lesson 6 · 90 minutes",
  objective: "Students create the About the Author page and 3 more story pages.",
  collects: "The author page and 3 story pages",
  flow: [
    ["4 min", "Welcome + Young Author Meditation"],
    ["6 min", "Share & Feedback"],
    ["25 min", "Teacher Lecture: how to create the Author Page + Creating with Music 1"],
    ["20 min", "Break Time"],
    ["10 min", "Creating in Silence"],
    ["15 min", "Creating with Music 2 + teacher check, Classroom Tracker & progress photo"],
    ["10 min", "Reflection & cleanup"]
  ],
  goals: [
    "Every student completes the About the Author page: a drawing, full name, “I am __ years old…”, the word AUTHOR, and no page number.",
    "Every student completes story pages 13, 14 and 15.",
    "Running total: 15 story pages + 4 special pages = 19 pages."
  ],
  goalTotals: "15 story pages · 19 total pages",
  slides: [
    ["s22.jpg", "About the Author: 1 drawing · 2 your full name · 3 “I am 6 years old. My favorite color is…” · 4 AUTHOR · 5 NO page number"],
    ["s23.jpg", "A real student's About the Author page"]
  ],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today is a very exciting day! You will create the page that tells readers about the amazing person who wrote this book: you!", "Now, let's take three minutes to get our creators' minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Teacher Lecture: the About the Author page", lines: ["Now we are going to create your Author Pages.", "An author page tells readers about the person who created the book, and that person is you!", "On your author page, you can include your name, your age or grade, what you love to do, what inspired you to write this book, and a picture of yourself or something that represents you.", "For example: Hi, my name is Uma. I am 6 years old. My favorite color is blue. I love to draw.", "Remember, readers love to know the author behind the story.", "Take a moment to think: what do you want your readers to know about you?", "Now, let's begin creating your Author Pages!"] },
    { title: "Creating in Silence", lines: SILENCE },
    { title: "Reflection", lines: ["Raise your hand if you finished your author page and three story pages today.", "Let's give ourselves a round of applause. Authors, thank you for your hard work today!", "Next week, we will create one of the most challenging pages in your book: the Back Cover!", "On the back cover, you'll write three sentences that tell readers what your story is about. Think of it as a little preview that makes people excited to read your book. Talk with your family or a good friend before our next class."] }
  ],
  teach: `<p>Help students write in the first person (“I am…”, “I love…”). Their age, favorite things and why they wrote the book are enough. They don't need to share private details like their school or address.</p>`,
  tracker: {
    goal: "Author page + story pages 13–15 (total 19 pages)",
    example: [
      ["Mia", "✓", "—"],
      ["Leo", "✓", "—"],
      ["Ava", "✓", "—"],
      ["Noah", "16 of 19 pages", "Email + call/text · office: plan extra support"],
      ["Zoe", "17 of 19 pages", "Email + call/text"]
    ],
    practice: {
      prompt: "End of Lesson 6 (goal: 19 total pages). Who needs a personal email plus a call or text?",
      students: [
        ["Mia", "19 pages.", false],
        ["Leo", "19 pages.", false],
        ["Ava", "20 pages; wrote an Author Book List page as an extension.", false],
        ["Noah", "16 pages.", true],
        ["Zoe", "17 pages.", true]
      ],
      why: "With only two lessons left, Noah (16 of 19 pages) and Zoe (17 of 19 pages) need a clear home plan this week. Tell the Tiny Star Office about any student 3 or more pages behind."
    }
  },
  emails: {
    standard: {
      title: "After Lesson 6: weekly email + Young Author Award Ceremony invitation",
      when: "Send within 1 day after Lesson 6.",
      subject: "Write It, Draw It, Publish It – Week 6 Goal: 19 Pages + You're Invited!",
      body:
"Dear Tiny Star Young Author Families,\n\n" +
"Our young authors have completed Lesson 6! Students learned how to create their About the Author pages!\n\n" +
"Before Lesson 7, students should have 19 pages in total:\n- One front cover\n- One dedication page\n- One full title page\n- One author page\n- 15 story pages\n\n" +
"It has been wonderful to see our talented young authors make meaningful progress each week on their journey toward becoming published authors, with your unconditional love and support.\n\n" +
"YOUNG AUTHOR AWARD CEREMONY\n" +
"Our final class will include a Young Author Award Ceremony, and your entire family is warmly invited to celebrate this exciting and memorable moment. Our young authors will present their stories and receive their awards with their families. We will also hold a Q&A about publication, future learning opportunities, and how Tiny Star can continue supporting your child's confidence and author identity.\n\n" +
"Time: [Day, Date, time]\nLocation: [Place, room]\n\n" +
"[Optional: next program announcement and early-bird offer]\n\n" +
"If your child feels proud of what they have accomplished, we would sincerely appreciate your supportive Google review: [Google review link]\n\n" +
"We look forward to celebrating with you!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [behindEmail(6, "the About the Author page plus story pages 13, 14 and 15 (19 pages in total)", "finish the missing page(s) this week. With two lessons left, a small plan helps: for example one page on [day], one page on [day]")],
    text: textMsg(6, "the author page + story pages 13–15 (19 pages total)"),
    call: callScript("the author page and story pages 13 to 15, which makes 19 pages in total. There are only two lessons left")
  },
  videos: [],
  docs: ["tracker"]
},

/* ---------------- LESSON 7 ---------------- */
{
  id: "lesson-7", nav: "Lesson 7 · Back Cover", label: "7",
  title: "Lesson 7: The Back Cover",
  eyebrow: "Program Lesson 7 · 90 minutes",
  objective: "Students create the back cover and story pages 16 and 17.",
  collects: "The back cover and story pages",
  flow: [
    ["4 min", "Welcome + Young Author Meditation"],
    ["6 min", "Share & Feedback"],
    ["25 min", "Teacher Lecture: how to create the Back Cover + Creating with Music 1"],
    ["20 min", "Break Time"],
    ["10 min", "Creating in Silence"],
    ["15 min", "Creating with Music 2 + teacher check, Classroom Tracker & progress photo"],
    ["10 min", "Reflection & cleanup; introduce keywords and price"]
  ],
  goals: [
    "Every student completes the back cover: 1) three sentences about the story, 2) sentences about the author, 3) the bottom area left blank for the ISBN barcode.",
    "After writing and drawing, students remove the frame and fully color the background (except the ISBN area).",
    "Every student completes story pages 16 and 17. Running total: 17 story pages + all 5 special pages = 22 pages."
  ],
  goalTotals: "17 story pages · 22 total pages",
  slides: [
    ["s25.jpg", "The Back Cover: 1 three sentences about the story · 2 sentences about yourself · 3 leave this area without writing and drawing"],
    ["s26.jpg", "Remove the frame and fully color the background; leave the bottom area for the ISBN"]
  ],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today we will create one of the most challenging pages in your book: the Back Cover!", "Now, let's take three minutes to get our creators' minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Teacher Lecture: the Back Cover", lines: ["Today we're going to create the back cover of your book!", "The back cover is very important, because it helps readers decide if they want to read your story.", "First, divide your back cover into three parts.", "Part one, at the top: write three sentences about your story. What is your story about? Why should someone read it? Make readers curious and excited!", "Part two, in the middle: write about yourself: what you enjoy, why you wrote this book, or something interesting about you.", "Part three, at the bottom: leave it empty. We will use this space for the barcode and publishing information.", "Now, let's create an exciting back cover that makes everyone want to read your book!"] },
    { title: "Creating in Silence", lines: SILENCE },
    { title: "Reflection: publishing decisions", lines: ["Raise your hand if you finished your back cover today.", "By now we should have all five special pages: the front cover, full title page, dedication page, author page and back cover.", "After you complete your book, you'll make two important publishing decisions.", "First, you'll choose seven keywords: words people might type into Amazon or Google to find a book like yours.", "Next, you'll decide the price of your book. Look on Amazon to see how similar books are priced.", "Talk with your family or a good friend about these decisions before our next class. Authors, thank you for your hard work today!"] }
  ],
  teach: `<p>This is the last full creating lesson. Check every student's total against the goal, and list exactly which pages each student must bring finished to Lesson 8.</p>`,
  photo: ["l7-student-photo.jpg", "Take one photo of each student with their finished pages, smiling with the book they made."],
  tracker: {
    goal: "Back cover + story pages 16–17 (total 22 pages)",
    example: [
      ["Mia", "✓", "—"],
      ["Leo", "✓", "—"],
      ["Ava", "✓", "Send the proofreading link"],
      ["Noah", "19 of 22 pages", "Email + call/text today · office"],
      ["Zoe", "21 of 22 pages", "Email + call/text"]
    ],
    practice: {
      prompt: "End of Lesson 7 (goal: 22 total pages). Who needs a personal email plus a call or text?",
      students: [
        ["Mia", "22 pages.", false],
        ["Leo", "22 pages.", false],
        ["Ava", "All 23 pages done and checked.", false],
        ["Noah", "19 pages.", true],
        ["Zoe", "21 pages; drew a flower in the ISBN area.", true]
      ],
      why: "Noah and Zoe are behind with only one lesson left. Zoe must also redo the bottom of her back cover so the ISBN area is blank. Ava is finished: run the quality check and send the proofreading link."
    }
  },
  emails: {
    standard: {
      title: "After Lesson 7: weekly email + ceremony reminder",
      when: "Send within 1 day after Lesson 7.",
      subject: "Write It, Draw It, Publish It – Week 7 Goal: 22 Pages",
      body:
"Dear Tiny Star Young Author Families,\n\n" +
"Our young authors have completed Lesson 7! Students learned how to create their back covers!\n\n" +
"Before Lesson 8, students should have 22 pages in total:\n- One front cover\n- One back cover\n- One dedication page\n- One full title page\n- One author page\n- 17 story pages\n\n" +
"Please also talk with your young author about two publishing decisions for Lesson 8: seven keywords readers might search for, and the book's price.\n\n" +
"YOUNG AUTHOR AWARD CEREMONY\n" +
"Lesson 8 will include our Young Author Award Ceremony, and your whole family is warmly invited! Our young authors will present their books and receive their awards, followed by a Q&A about publication and next steps.\n\n" +
"Time: [Day, Date, time]\nLocation: [Place, room]\n\n" +
"If you feel proud of what your child has accomplished, we would sincerely appreciate your supportive Google review: [Google review link]\n\n" +
"We look forward to celebrating with you!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [behindEmail(7, "the back cover plus story pages 16 and 17 (22 pages in total)", "finish these exact pages before our final class: [list pages]. Everything finished by Lesson 8 can be published right away")],
    text: textMsg(7, "the back cover + story pages 16–17 (22 pages total)"),
    call: callScript("the back cover and story pages 16 and 17, which makes 22 pages in total. Next week is our last class")
  },
  videos: [],
  docs: ["pubForm", "tracker"]
},

/* ---------------- LESSON 8 ---------------- */
{
  id: "lesson-8", nav: "Lesson 8 · Publishing & Pitch", label: "8",
  title: "Lesson 8: Publishing Form + 30-Second Pitch",
  eyebrow: "Program Lesson 8 · 90 minutes",
  objective: "Every book is complete (23 pages), the publishing form is filled in, and every student presents a 30-second pitch.",
  collects: "All 23 pages and the publishing form",
  flow: [
    ["5 min", "Welcome + Young Author Meditation"],
    ["—", "Pages 1–23 self-check + fill in the Publishing Form"],
    ["25 min", "Teacher Lecture: how to present your book in public + Creating with Music 1 (write the pitch)"],
    ["20 min", "Break Time"],
    ["30 min", "30-second pitch practice & presentations; record each student's pitch video; Classroom Tracker"],
    ["10 min", "Reflection, group photo & cleanup"]
  ],
  goals: [
    "Every student has all 23 pages: 18 story pages + 5 special pages, checked by the teacher, then scanned and submitted by the student.",
    "Every student completes the Publishing and After Publishing Form: title, full name, a 3–4 sentence description, 7 keywords, price (suggested $12.99), and author copies.",
    "Every student presents and records a 30-second pitch using the public speaking chant (FHBESV)."
  ],
  goalTotals: "18 story pages · 23 total pages",
  slides: [
    ["s27.jpg", "Lesson 8 overview: Pages 1–23 self-check → Publishing Sheet → Public Speaking → Game Time"],
    ["s13.jpg", "Tiny Star Author Public Speaking Chant: Feet still, Hands in place, Back straight, Eyes on the audience, Big smile, Clear voice… pause!"],
    ["s28.jpg", "A finished book: all 23 pages"],
    ["s29.jpg", "“You did it! You are a young author and illustrator!”"]
  ],
  scan: { intro: "In Lesson 8, teach students to scan their finished books with the Tiny Star Scanner and submit them to publish.", video: "video/scanner-demo.mp4" },
  samples: [
    ["Student sample 1: 30-second book pitch", "https://share.icloud.com/photos/020CsK53ETpKgjA_-vOc0XiZQ"],
    ["Student sample 2: 30-second book pitch", "https://share.icloud.com/photos/0f40KTpodpp6BymkLyoEATTFg"]
  ],
  scripts: [
    { title: "Welcome", lines: ["Welcome, Young Authors!", "Today is our final class, and a very special day! Today you are not just writers. You are published authors!", "Now, let's take three minutes to get our creators' minds ready."] },
    { title: "Young Author Meditation", lines: MEDITATION },
    { title: "Teacher Lecture: the Public Speaking Chant", lines: ["Every author knows how to share their book with others.", "When you stand in front of an audience, people aren't just listening to your words. They are watching how you stand, smile and speak.", "Let's learn the Tiny Star Author Public Speaking Chant!", "F: Feet still! Stand with both feet on the floor. Don't rock or walk around.", "H: Hands in place! Keep your hands relaxed by your sides, or gently hold your book.", "B: Back straight! Stand tall and proud.", "E: Eyes on the audience! Look at different people around the room.", "S: Big smile! A smile helps your audience feel happy and connected to you.", "V: Clear voice, and pause! Speak loudly and clearly. Don't rush.", "Now let's say it together: Feet still, hands in place, back straight, eyes on the audience, big smile, clear voice. Pause, pause, pause!"] },
    { title: "Teacher Lecture: the 30-second pitch", lines: ["Now you will introduce your book in thirty seconds.", "One: introduce yourself. Hello, everyone! My name is blank, and I am the author of blank.", "Two: introduce your book. My book is about blank. I wrote this story because blank.", "Three: invite the audience. I hope you enjoy reading my book! You can find it on Amazon. Thank you!", "Remember, you don't have to be perfect. You just need to confidently share your story."] },
    { title: "Sample pitch (model it for students)", lines: ["Hello, everyone! My name is Mia, and I am the author of The Penguin Who Really Traveled.", "My book is about a little penguin who wants to see the world, but every boat leaves without him.", "I wrote this story because I love penguins, and I want kids to know that you should never give up.", "I hope you enjoy reading my book! You can find it on Amazon. Thank you!"] },
    { title: "Closing celebration", lines: ["Congratulations, everyone! You did it! You have completed your very own book. You should be so proud of yourselves.", "Here's what will happen next.", "One: our Tiny Star publishing team will professionally format your book.", "Two: we will email the formatted book to your parents for proofreading and final approval. Please remind your parents to check their email.", "Three: after your family approves, your book will be published. This usually takes about ten days.", "Four: about ten days after your book is published, you'll receive your very own author copy.", "Let's give ourselves a big round of applause, because today we celebrate our newest Tiny Star Young Authors!"] }
  ],
  teach: `<p>Check and edit each pitch draft. Record each student's final pitch video in a quiet corner. Note any student who has not completed all 23 pages. After the quality check, each student scans and submits their own pages with the Tiny Star Scanner (parents can help at home). Then click <b>Send Proofreading Link</b> in the Tiny Star App for every finished book. End with a group photo.</p>`,
  tracker: {
    goal: "All 23 pages + publishing form + pitch video",
    example: [
      ["Mia", "✓", "Proofreading link sent"],
      ["Leo", "✓", "Proofreading link sent"],
      ["Ava", "✓", "Sent in Lesson 7"],
      ["Noah", "21 of 23 pages", "Email + call/text: 15-day plan"],
      ["Zoe", "✓", "Email: publishing form is missing keywords"]
    ],
    practice: {
      prompt: "End of Lesson 8. Who needs a personal email (and a call or text) today?",
      students: [
        ["Mia", "23 pages, form complete, pitch recorded.", false],
        ["Leo", "23 pages, form complete, pitch recorded.", false],
        ["Ava", "Finished last week; proofreading link already sent.", false],
        ["Noah", "21 pages; story pages 17–18 missing.", true],
        ["Zoe", "23 pages, but the publishing form has no keywords.", true]
      ],
      why: "Noah needs a personal plan to submit the last 2 pages within 15 days. Zoe's book is done, but publishing can't start until her form is complete."
    }
  },
  emails: {
    standard: {
      title: "After Lesson 8: congratulations email to all families",
      when: "Send within 1 day after Lesson 8.",
      subject: "Congratulations, Young Author!",
      body:
"Dear Tiny Star Young Author Families,\n\n" +
"Congratulations on completing the Tiny Star “Write It, Draw It, Publish It” / Young Author Lab program! By giving your child this opportunity and supporting them throughout the program, you have helped turn their ideas into a real book and helped them become a proud published author!\n\n" +
"POST-PROGRAM SURVEY\n" +
"The Tiny Star 4C Method strengthens children's creativity, communication, confidence and creator identity. Before the program you completed a pre-program survey. To help us understand the changes you've seen in your child, please take about 3 minutes to complete this post-program survey: [survey link]\n\n" +
"15 DAYS TO SUBMIT THE MANUSCRIPT\n" +
"If your child has not yet submitted a completed manuscript, please submit it within 15 days so we can continue the publishing process. The fastest way is to scan all pages into one PDF and share the Google Drive link with joy@thetinystar.com. You can also call Joy at 857-832-8338 to arrange an in-person drop-off; we'll scan the pages and return the originals.\n\n" +
"KEEP IN TOUCH\n" +
"Thank you for being part of the Tiny Star Young Author Community! Join Kids Create & Publish on Facebook for updates, photos and future opportunities: [Facebook link]\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
    },
    personal: [
      behindEmail(8, "a complete 23-page book and the publishing form", "finish the remaining page(s) at home, then scan all pages into one PDF and share it with joy@thetinystar.com within 15 days"),
      {
        title: "1 week after the program ends: manuscript reminder",
        when: "Send on Day 7 after the last lesson, only to families who haven't submitted a complete manuscript.",
        subject: "Reminder: 8 Days Left to Submit Your Child's Manuscript",
        body:
"Dear Tiny Star Young Author Families,\n\n" +
"Today is Day 7 after the Write It, Draw It, Publish It / Young Author Lab program ended. If your child has not yet submitted a completed manuscript, please submit it within the next 8 days so we can continue the publishing process.\n\n" +
"The most efficient way is to scan all pages into one PDF file and share the Google Drive link with joy@thetinystar.com.\n\n" +
"You can also contact Joy at 857-832-8338 or joy@thetinystar.com to arrange an in-person drop-off. We will scan the manuscript and return the original to you.\n\n" +
"Thank you for helping your young author complete this important final step!\n\n" +
"Warmly,\n[Your Name]\nTiny Star Certified Teacher"
      }
    ],
    text: "Hi [Parent's Name], this is [Your Name] from Tiny Star. Congratulations: [Student] presented [his/her] book today! 🌟 [He/She] still needs to finish [pages/form]. Please send the scanned pages to joy@thetinystar.com within 15 days so we can publish. Thank you!",
    call: callScript("finishing the last pages so the book can be published. We need the complete manuscript within 15 days")
  },
  videos: ["pitch1", "speak"],
  docs: []
}
];

/* ---------------- EXAM ---------------- */
const QS = [
["What are the four parts of the Tiny Star 4C Method®?",["Creativity, Communication, Confidence, Creator Identity","Creativity, Collaboration, Courage, Completion","Curiosity, Communication, Confidence, Character","Creativity, Coloring, Composing, Celebrating"],0,"Creativity, Communication, Confidence and Creator Identity."],
["When do you send the “Before the Program Starts” email to families?",["The night before Lesson 1","7 days before the program starts","After Lesson 1","Only if parents ask"],1,"Send it 7 days before the program starts."],
["When do you send each weekly “After Lesson” email?",["Within 1 day after the lesson","Once a month","Only after Lesson 8","Before the lesson"],0,"Send the right “After Lesson” email within 1 day of each lesson."],
["What is the goal of Lesson 1?",["Finish the front cover","Write the whole story on the Mini Book pages","Finish 3 story pages","Choose 7 keywords"],1,"Every student writes the whole story on the Mini Book (the 9 ★ sections)."],
["A student did not finish the Mini Book in Lesson 1. What do you do?",["Wait and see if they finish by Lesson 3","Write a personal email to that family and call or text the parent within 24 hours, with a simple way to help at home","Mention it in the group email with the child's name","Finish it for the student"],1,"Lesson 1 is the hardest goal. Follow up personally and quickly, with one family per message."],
["When guiding the five story elements in Lesson 1, what should you avoid?",["Giving examples","Asking one specific question at a time","Guiding individual students one by one from the very beginning","Inviting 1–2 students to share"],2,"Take the whole class through WHO, WHEN, WHERE, WHAT and PROBLEM first."],
["In the 3 Acts Method, what happens in Act 3?",["We meet the character","The problem appears","The character tries to solve the problem: try, try, and the third try works","The author writes the dedication"],2,"Act 3 is solving the problem with Try, Try, Try."],
["What are the three feedback questions taught in Lesson 2?",["Is it long? Is it colorful? Is it done?","Do you like my story? Why? · Is there anything you don't like? · What is one suggestion to make my story better?","Who is the hero? Where is it? When is it?","What is the title? Who is the author? What is the price?"],1,"Then the author closes with “Thank you for your feedback.”"],
["What is the correct order for creating a story page?",["Marker first, then pencil","Pencil, teacher check, then trace with marker","Marker only","Pencil only"],1,"No marker until the teacher has checked the pencil writing."],
["Which page should NOT have a page number?",["Story page 5","The full title page","Story page 12","Story page 1"],1,"The full title page, front cover and author page have no page number."],
["What goes on the front cover?",["Series name, book title, full name, a fully colored background","Only the title","Three sentences about the story","The ISBN barcode area"],0,"Front cover: series name, book title, full name, background colors, no page number."],
["What goes in the bottom part of the back cover?",["Three sentences about the story","A picture of the author","Nothing. Leave it blank for the ISBN barcode","The dedication"],2,"The bottom stays blank for the ISBN."],
["How many pages does a finished Tiny Star book have?",["18","20","23: 18 story pages + 5 special pages","30"],2,"Front cover, full title page, dedication, author page, back cover + 18 story pages."],
["What should you write in a student's Classroom Tracker cell?",["Your opinion of the student's personality","Pages finished, how many pages behind (if any), and observable behavior notes","Only attendance","Nothing unless the student misbehaves"],1,"The tracker shows progress against today's goal and facts-only behavior notes."],
["After you fill in the tracker, which students get a personal email plus a call or text?",["Every student, every week","Students who are behind the lesson goal or had a behavior concern","Only students who finished early","Nobody: the weekly email covers everyone"],1,"Circle anyone behind or with a concern, and follow up within 24 hours."],
["How many keywords does each student choose for their book?",["3","5","7","10"],2,"Seven keywords readers might search on Amazon or Google."],
["The class is noisy. What do you do?",["Raise your voice","Use an attention signal like “Tiny…” / “Star!” and wait for everyone","Turn off the lights","Take away stickers from the whole class"],1,"Never shout."],
["A student says, “I don't know what to write.” What should you do?",["Give them a story idea","Write the first page for them","Ask guiding questions; if still stuck, offer two choices","Tell them to copy a classmate"],2,"The child chooses and still owns the story."],
["Which of these should a parent email NEVER do?",["Begin with something positive","Describe observable behavior","Address two families in one email, or label a child “lazy”","Explain the support you already gave"],2,"One family per email; no labels or assumptions."],
["A student's story uses characters from a famous cartoon. What do you tell the family?",["The book must be thrown away","The student keeps the story idea but creates original characters, names and world, because protected characters can't be published","It's fine to publish","Change to a new story from scratch"],1,"Keep the structure, make the characters original."],
["When do students scan and submit their finished book pages to Tiny Star?",["After every class","In the final class (Lesson 8)","Once a month","Only when parents ask"],1,"In the final class, the teacher teaches students to scan and submit with the Tiny Star Scanner. Students and their parents do the scanning and submitting, not the teacher."],
["Which page is NOT ready to scan and submit?",["Fully colored, page number written","Neat writing, no more than 7 words per line","Pencil sketch lines still showing","Spelling checked"],2,"Erase all pencil lines first."],
["The person picking up a student is not on your caregiver list. What do you do?",["Release the student if the person seems friendly","Keep the student with you and take them to the school's front desk office","Let the student walk home","Ask the student"],1,"Release students only to authorized caregivers."],
["A student hasn't finished the book by the end of Lesson 8. What is the deadline you share with the family?",["No deadline","Submit the complete manuscript within 15 days","Next school year","Within 24 hours"],1,"Families have 15 days, with a reminder on Day 7."],
["What are the parts of the Tiny Star Public Speaking Chant?",["Feet still, Hands in place, Back straight, Eyes on the audience, Big smile, Clear voice and pause","Fast, Happy, Bold, Excited, Smart, Victorious","Face, Hands, Book, Eyes, Song, Voice","Focus, Hope, Believe, Explain, Share, Visit"],0,"FHBESV: and pause, pause, pause!"]
];
