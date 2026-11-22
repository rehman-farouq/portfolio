export interface ToolContent {
  /** What the tool does and the idea/formula behind it. */
  about: string
  /** A concrete worked example. */
  example: string
  /** Practical tips. */
  tips: string[]
  /** Tool-specific questions and answers. */
  faqs: { q: string; a: string }[]
  /** Optional honest note about limits or privacy. */
  note?: string
}

export const TOOL_CONTENT: Record<string, ToolContent> = {
  'age-calculator': {
    about:
      'The calculator subtracts your birth date from a chosen date and counts whole years, then the leftover months and days. Because months have different lengths, it works from the calendar rather than dividing days by 365, which avoids the one-day drift that simple division causes around leap years.',
    example:
      'Born 15 March 1995, checked on 10 June 2026: that is 31 years, 2 months and 26 days, because the 15 March birthday has passed this year but the 15 June monthly mark has not.',
    tips: [
      'Enter the birth date exactly as on official documents, since forms often ask for age on a specific cut-off date.',
      'People born on 29 February are usually treated as turning a year older on 28 February or 1 March, depending on the rule of the authority you are dealing with.',
      'Change the comparison date to see how old someone will be on a future deadline such as an exam or visa date.',
    ],
    faqs: [
      { q: 'Why does my age in days look different from other sites?', a: 'Sites differ on whether they count the birth day itself. This tool counts elapsed days between the two dates.' },
      { q: 'Does it account for leap years?', a: 'Yes. It uses real calendar dates, so 29 February is included when it falls between the two dates.' },
    ],
  },
  'app-vs-website': {
    about:
      'This tool compares building a mobile app with building a website using your inputs for budget, timeline and goals. Websites are usually cheaper and faster to launch and are found through search; apps cost more but can use device features such as push notifications, camera and offline storage.',
    example:
      'A local bakery that only needs to show a menu, hours and a contact form is normally better served by a website. A delivery service that needs live order tracking and notifications benefits from a native or Flutter app.',
    tips: [
      'Start with the website if you are validating an idea, and add an app once users ask for features a browser cannot offer.',
      'A cross-platform framework such as Flutter can cut app cost compared with building iOS and Android separately.',
      'Remember ongoing costs: store fees, updates, hosting and support continue after launch.',
    ],
    faqs: [
      { q: 'Are the numbers a quote?', a: 'No. They are rough planning figures. Real costs depend on scope, design and the developer you hire.' },
      { q: 'Can one codebase serve both?', a: 'Often yes. A progressive web app or a Flutter project can target web and mobile from largely shared code.' },
    ],
    note: 'Estimates are general guidance for planning, not a quotation.',
  },
  'ascii-art': {
    about:
      'ASCII art draws shapes and lettering using only keyboard characters. The generator maps each letter of your text to a block of characters in the chosen font style so the result can be pasted into code comments, README files, terminals and chat messages.',
    example:
      'Typing the word HELLO in a block font produces five lines of characters that spell the word out in large letters when shown in a monospaced font.',
    tips: [
      'Always paste results into a monospaced font such as a code block; proportional fonts break the alignment.',
      'Keep text short. Wide fonts quickly exceed the 80-column width of many terminals.',
      'Check how the art looks on mobile, where narrow screens wrap long lines.',
    ],
    faqs: [
      { q: 'Why does the art look broken in my chat app?', a: 'Most chat apps use a proportional font. Wrap the text in a code block so spacing is preserved.' },
      { q: 'Can I use it commercially?', a: 'The text you generate is yours to use. Fonts and presets here are simple character patterns.' },
    ],
  },
  'base64-converter': {
    about:
      'Base64 represents binary data using 64 printable characters so it can travel through systems that only handle text, such as JSON fields, email and data URLs. Every three bytes of input become four characters, so encoded data is about 33 percent larger than the original.',
    example:
      'The text "Hi" encodes to "SGk=". The trailing equals sign is padding added when the input length is not a multiple of three bytes.',
    tips: [
      'Base64 is an encoding, not encryption. Anyone can decode it, so never use it to hide passwords or secrets.',
      'If decoding fails, check for stray spaces, line breaks or URL-safe variants that use - and _ instead of + and /.',
      'For images in CSS or HTML, prefix the output with a data URL such as data:image/png;base64, and only inline small files.',
    ],
    faqs: [
      { q: 'Is Base64 secure?', a: 'No. It is reversible by design and offers no confidentiality.' },
      { q: 'Why is there an equals sign at the end?', a: 'It pads the output so its length is a multiple of four characters.' },
    ],
  },
  'bmi-calculator': {
    about:
      'Body Mass Index is weight in kilograms divided by height in metres squared. The World Health Organization groups adult results as under 18.5 underweight, 18.5 to 24.9 normal, 25 to 29.9 overweight and 30 or above obese.',
    example:
      'A person weighing 70 kg at 1.75 m has a BMI of 70 / (1.75 x 1.75) = 22.9, which falls in the normal range.',
    tips: [
      'BMI does not distinguish muscle from fat, so athletes can score as overweight while being healthy.',
      'Waist circumference and body composition give additional information that BMI cannot.',
      'Children and teenagers are assessed with age and sex percentile charts, not adult cut-offs.',
    ],
    faqs: [
      { q: 'Is a normal BMI always healthy?', a: 'Not necessarily. It is a screening number only and ignores diet, fitness, genetics and fat distribution.' },
      { q: 'Should I use this for medical decisions?', a: 'No. Discuss weight and health goals with a doctor or dietitian.' },
    ],
    note: 'For information only. It is not medical advice.',
  },
  'caffeine-calculator': {
    about:
      'The calculator adds the caffeine in the drinks you choose and compares the total to the 400 mg per day figure that the US FDA cites as an amount not generally associated with negative effects in healthy adults. Typical amounts are roughly 95 mg for a cup of brewed coffee, 40 mg for black tea and 30 to 35 mg for a can of cola.',
    example:
      'Two cups of brewed coffee (about 190 mg) plus one energy drink (about 80 mg) total roughly 270 mg, which is under the 400 mg guideline.',
    tips: [
      'Caffeine content varies widely by brand, brew strength and cup size, so treat results as estimates.',
      'Pregnant people are usually advised to stay well under 200 mg per day; check with a doctor.',
      'Caffeine has a half-life of several hours, so an afternoon coffee can still affect sleep at night.',
    ],
    faqs: [
      { q: 'Is 400 mg a limit for everyone?', a: 'No. Sensitivity differs, and pregnancy, some medicines and heart conditions lower the safe amount.' },
      { q: 'Does decaf contain caffeine?', a: 'A small amount, typically 2 to 15 mg per cup.' },
    ],
    note: 'For information only. It is not medical advice.',
  },
  'calorie-burner': {
    about:
      'Calories burned are estimated from MET values, where one MET is the energy you use at rest. The formula is calories = MET x weight in kg x time in hours. Sleeping is about 0.9 MET, brisk walking about 3.5 and running around 9 or more.',
    example:
      'A 70 kg person doing an activity rated at 8 MET for 30 minutes burns about 8 x 70 x 0.5 = 280 calories.',
    tips: [
      'MET tables are population averages. Your fitness level, terrain and intensity change the real number.',
      'Enter your actual weight; heavier people burn more for the same activity.',
      'Use the figure to compare activities rather than as a precise food allowance.',
    ],
    faqs: [
      { q: 'Why does my watch show a different number?', a: 'Wearables also use heart rate and movement data, so their estimate can differ from a MET table.' },
      { q: 'Does this include calories burned at rest?', a: 'MET values already include resting energy, so the total covers your whole expenditure during the activity.' },
    ],
    note: 'For information only. It is not medical advice.',
  },
  'calorie-calculator': {
    about:
      'The calculator estimates your basal metabolic rate with the Harris-Benedict equation, which uses weight, height, age and sex, and then multiplies it by an activity factor to approximate daily calorie needs. A deficit of about 500 calories per day is commonly associated with losing roughly half a kilogram per week.',
    example:
      'For a 30-year-old man at 75 kg and 175 cm the equation gives a BMR of about 1,770 calories. With a moderate activity factor of 1.55 the maintenance estimate is around 2,740 calories.',
    tips: [
      'Be honest about activity level. Overestimating it is the most common reason results look too high.',
      'Re-check every few weeks. Needs change as weight changes.',
      'Do not eat below levels recommended by a health professional without supervision.',
    ],
    faqs: [
      { q: 'How accurate is it?', a: 'Predictive equations are typically within about 10 percent for most adults, but individual metabolism varies.' },
      { q: 'Is it suitable for teenagers or pregnancy?', a: 'No. Those groups have different needs and should get personal guidance.' },
    ],
    note: 'For information only. It is not medical or dietary advice.',
  },
  'color-converter': {
    about:
      'Screens describe color in several equivalent ways. HEX is a six-digit shorthand for red, green and blue values from 00 to FF, RGB lists the same channels as numbers from 0 to 255, and HSL expresses color as hue (0 to 360 degrees), saturation and lightness, which is easier to adjust by hand.',
    example:
      '#FF5733 equals rgb(255, 87, 51) and about hsl(11, 100%, 60%).',
    tips: [
      'Use HSL when you want a lighter or darker shade: change only the lightness value.',
      'Check contrast between text and background colors; WCAG recommends at least 4.5:1 for body text.',
      'Colors may look different across screens because of display calibration.',
    ],
    faqs: [
      { q: 'Can I use 3-digit HEX?', a: 'Yes. #F80 is shorthand for #FF8800.' },
      { q: 'Why do converted values differ slightly?', a: 'Converting between color models involves rounding, so values can shift by one unit.' },
    ],
  },
  'color-palette-pro': {
    about:
      'Palettes are built from color-wheel relationships. Complementary colors sit opposite each other, analogous colors sit next to each other, and triadic colors are spaced a third of the wheel apart. Starting from one base color, the tool applies these rules to produce harmonious sets.',
    example:
      'From a base blue at hue 220, the complementary color is at hue 40 (an orange), and an analogous set uses hues around 190, 220 and 250.',
    tips: [
      'Follow the 60-30-10 rule: 60 percent dominant color, 30 percent secondary, 10 percent accent.',
      'Test your palette in both light and dark interfaces.',
      'Keep one neutral in the set for text and backgrounds.',
    ],
    faqs: [
      { q: 'Can I export the colors?', a: 'Use the copy options to take HEX values into your CSS or design tool.' },
      { q: 'How many colors should a brand use?', a: 'Most brands work well with one primary, one or two accents and a few neutrals.' },
    ],
  },
  'credit-card-validator': {
    about:
      'The Luhn algorithm is a checksum used by card numbers. Starting from the right, every second digit is doubled (subtracting 9 if the result exceeds 9), then all digits are summed. If the total is divisible by 10 the number is structurally valid. The first digits also identify the network, for example 4 for Visa and 51 to 55 or 2221 to 2720 for Mastercard.',
    example:
      'The well-known test number 4242 4242 4242 4242 passes the Luhn check and is identified as Visa.',
    tips: [
      'A pass only means the digits are consistent, not that the account exists, is active or has funds.',
      'Use the standard test numbers published by payment providers when building checkout forms.',
      'Never enter a real card number into any tool you do not control.',
    ],
    faqs: [
      { q: 'Can this tell me if a card is real?', a: 'No. Only the issuing bank can confirm that.' },
      { q: 'Is it safe to type my card here?', a: 'Please do not. Use test numbers instead of real card details.' },
    ],
    note: 'Intended for developers testing forms. It checks number format only.',
  },
  'css-minifier': {
    about:
      'Minification removes comments, line breaks and unneeded spaces from CSS so the file transfers faster. It does not change how the styles behave. Smaller CSS improves load time, which feeds into Core Web Vitals such as Largest Contentful Paint.',
    example:
      'A rule written as "body { margin: 0; }" across three lines with a comment becomes "body{margin:0}" in a single line.',
    tips: [
      'Keep your readable source file and only deploy the minified output.',
      'Gzip or Brotli compression on the server shrinks the file further.',
      'Test the minified file in your browser, especially if you rely on unusual hacks or very old syntax.',
    ],
    faqs: [
      { q: 'Will minifying break my styles?', a: 'It should not for valid CSS, but always test before deploying.' },
      { q: 'Does it merge or rewrite selectors?', a: 'No. It only strips whitespace and comments.' },
    ],
  },
  'discount-calculator': {
    about:
      'The sale price is the original price multiplied by one minus the discount rate. The amount saved is the original price multiplied by the discount rate. Stacked discounts are applied one after another, not added together.',
    example:
      'A 2,000 item with 25 percent off costs 2,000 x 0.75 = 1,500, so you save 500. Two successive 20 percent discounts leave 64 percent of the price, not 60.',
    tips: [
      'Check whether tax is added before or after the discount in your region.',
      'Compare unit prices as well as discounts when choosing between brands or pack sizes.',
      'To find the original price from a sale price, divide by one minus the discount rate.',
    ],
    faqs: [
      { q: 'Are two 20% discounts the same as 40%?', a: 'No. The second applies to the already reduced price, so the total is 36 percent off.' },
      { q: 'How do I work out the discount percentage?', a: 'Subtract the sale price from the original, divide by the original and multiply by 100.' },
    ],
  },
  'email-validator': {
    about:
      'The validator checks that an address has a local part, an @ symbol and a domain with a valid structure, and compares the domain to a list of known disposable email services. It does not contact the mail server, so it cannot confirm that a mailbox actually exists.',
    example:
      'name@example.com passes the format check. name@@example.com and name@example fail because of the doubled @ and the missing domain extension.',
    tips: [
      'For sign-up forms, the only reliable check is sending a confirmation email.',
      'Be careful not to reject valid but unusual addresses, such as ones with plus signs (name+tag@example.com).',
      'The disposable list covers common services and cannot include every temporary domain.',
    ],
    faqs: [
      { q: 'Does it check that the inbox exists?', a: 'No. It checks format and a list of disposable domains only.' },
      { q: 'Why is a valid-looking address rejected?', a: 'Common causes are spaces, a missing domain extension or consecutive dots.' },
    ],
  },
  'file-converter': {
    about:
      'The tool converts structured text data between formats such as JSON, CSV, XML, YAML and Base64. JSON uses key-value pairs and arrays, CSV is flat rows and columns, XML uses nested tags and YAML relies on indentation. Converting between them can lose structure when the target format cannot represent nesting.',
    example:
      'A JSON list of two users with name and age fields becomes a CSV with a header row "name,age" and two data rows.',
    tips: [
      'Flat data converts cleanly. Deeply nested JSON may need flattening before it fits into CSV.',
      'Check quoting and commas in values; they should be wrapped in quotes inside CSV.',
      'Validate your input first. A missing bracket or quote is the usual cause of conversion errors.',
    ],
    faqs: [
      { q: 'Can it convert images or PDFs?', a: 'No. It is for text-based data formats.' },
      { q: 'Why did some fields disappear?', a: 'The target format may not support that structure, such as nested objects in CSV.' },
    ],
  },
  'fuel-cost-calculator': {
    about:
      'Trip fuel cost is distance divided by fuel efficiency, multiplied by the price of fuel. With efficiency in kilometres per litre this gives litres used; with miles per gallon the result is gallons.',
    example:
      'A 300 km trip in a car that does 12 km per litre uses 25 litres. At 280 per litre the fuel cost is 7,000.',
    tips: [
      'Real efficiency drops with air conditioning, heavy loads, hills and high speed, so add a margin.',
      'For a round trip, double the distance.',
      'Use your car\u2019s long-run average, not the brochure figure.',
    ],
    faqs: [
      { q: 'How do I find my efficiency?', a: 'Fill the tank, reset the trip meter, drive normally, refill and divide distance by litres added.' },
      { q: 'Does it include tolls and parking?', a: 'No. Add those separately.' },
    ],
  },
  'grade-calculator': {
    about:
      'A weighted grade multiplies each score by its weight and sums the results. GPA is the average of grade points weighted by credit hours, so a 4-credit course influences the result more than a 1-credit course.',
    example:
      'An A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course give (4 x 3 + 3 x 4) / 7 = 3.43 GPA.',
    tips: [
      'Check your institution\u2019s scale. Some use 4.0, others 5.0 or percentage-based systems.',
      'Use the tool to find what score you need on a final exam to reach a target grade.',
      'Enter credits accurately; they drive the weighting.',
    ],
    faqs: [
      { q: 'Is a plus or minus included?', a: 'Use the grade-point value your school assigns, for example 3.7 for A-minus.' },
      { q: 'Will it match my transcript?', a: 'Only if the same scale and rounding rules apply. The official transcript is authoritative.' },
    ],
  },
  'hash-generator': {
    about:
      'A hash function turns any input into a fixed-length fingerprint. The same input always gives the same hash, but the hash cannot be reversed. SHA-256 is widely used for integrity checks, while MD5 and SHA-1 are considered broken for security purposes because collisions can be created.',
    example:
      'Even a one-character change in the input, such as "hello" versus "Hello", produces a completely different SHA-256 hash.',
    tips: [
      'Use hashes to verify downloaded files against a published checksum.',
      'Do not store passwords with a plain fast hash. Use a dedicated password hashing function such as bcrypt, scrypt or Argon2.',
      'Prefer SHA-256 or stronger for anything security-related.',
    ],
    faqs: [
      { q: 'Can a hash be decoded?', a: 'No. It is a one-way function, although weak or common inputs can be guessed.' },
      { q: 'Why is MD5 discouraged?', a: 'Practical collision attacks exist, so it should not be used where tampering matters.' },
    ],
  },
  'html-encoder-decoder': {
    about:
      'HTML encoding replaces characters that have special meaning, such as <, > and &, with entities like &lt;, &gt; and &amp; so a browser displays them as text instead of treating them as markup. Encoding user-supplied text is a core defence against cross-site scripting.',
    example:
      'The text <b>Hi</b> & welcome encodes to &lt;b&gt;Hi&lt;/b&gt; &amp; welcome and shows literally on the page.',
    tips: [
      'Encode on output, in the context where the data is used. HTML, attributes, JavaScript and URLs each need different escaping.',
      'Modern frameworks such as React escape text by default; avoid bypassing them with raw HTML insertion.',
      'Decode only text you trust.',
    ],
    faqs: [
      { q: 'When should I decode?', a: 'When you receive entity-encoded text and want to read the original characters.' },
      { q: 'Is encoding enough to stop XSS?', a: 'It helps a lot when applied correctly, but use a layered approach including content security policy.' },
    ],
  },
  'image-resize': {
    about:
      'Resizing changes the pixel dimensions of an image. Reducing dimensions lowers file size, which speeds up pages. Keeping the aspect ratio prevents the picture from looking stretched. Enlarging a small image cannot add real detail and usually looks soft.',
    example:
      'A 4000 x 3000 photo scaled to 1200 x 900 keeps the 4:3 ratio and is typically a small fraction of the original file size.',
    tips: [
      'Resize to the largest size the image will be displayed at, not bigger.',
      'JPEG suits photographs, PNG suits graphics with transparency and WebP often gives smaller files for both.',
      'Keep your original. Repeated resizing and saving degrades quality.',
    ],
    faqs: [
      { q: 'Does resizing reduce quality?', a: 'Shrinking by a moderate amount keeps images looking sharp. Large enlargements lose clarity.' },
      { q: 'Is my image uploaded?', a: 'Processing uses your browser. Check the tool\u2019s behaviour before using sensitive images.' },
    ],
  },
  'json-formatter': {
    about:
      'JSON uses strictly defined syntax: double-quoted keys and strings, no trailing commas and no comments. The formatter parses your text, reports where it breaks, and re-prints it with consistent indentation so structure is easy to read. Minify mode does the reverse and removes whitespace.',
    example:
      '{"name":"Ali","skills":["Dart","React"]} becomes a multi-line, indented version where each key and array item sits on its own line.',
    tips: [
      'The most common errors are single quotes, trailing commas and unquoted keys.',
      'Large payloads are easier to debug after formatting, because you can collapse sections mentally by indentation.',
      'Minify JSON before sending it over the network to save bandwidth.',
    ],
    faqs: [
      { q: 'Why does my JSON fail to parse?', a: 'Check for single quotes, missing commas, trailing commas and unescaped characters inside strings.' },
      { q: 'Does formatting change the data?', a: 'No. Only whitespace changes.' },
    ],
  },
  'json-to-csv': {
    about:
      'The converter reads a JSON array of objects, uses the keys as column headers and writes each object as a row. This makes API responses easy to open in Excel or Google Sheets. Values containing commas or quotes are wrapped in quotes so the columns stay aligned.',
    example:
      '[{"name":"Sara","age":28},{"name":"Omar","age":31}] becomes a header line "name,age" followed by the rows "Sara,28" and "Omar,31".',
    tips: [
      'Make sure the top level is an array. A single object should be wrapped in square brackets.',
      'Nested objects do not fit naturally into CSV; flatten them first.',
      'If characters look wrong in Excel, import the file as UTF-8.',
    ],
    faqs: [
      { q: 'What if objects have different keys?', a: 'The columns are built from the keys found. Missing values appear as empty cells.' },
      { q: 'Can I convert CSV back to JSON?', a: 'Use the File Converter tool for that direction.' },
    ],
  },
  'loan-calculator': {
    about:
      'Monthly payment on a fixed-rate loan is P x r / (1 - (1 + r)^-n), where P is the amount borrowed, r is the monthly interest rate (annual rate divided by 12) and n is the number of monthly payments. Early payments are mostly interest; later ones are mostly principal.',
    example:
      'Borrowing 1,000,000 at 12 percent a year for 5 years gives a monthly payment of about 22,244 and total interest of roughly 334,600.',
    tips: [
      'A shorter term raises the monthly payment but cuts total interest substantially.',
      'Compare the total repaid, not just the monthly amount, when choosing between loans.',
      'Fees, insurance and variable rates are not included.',
    ],
    faqs: [
      { q: 'Does it work for variable-rate loans?', a: 'It assumes a fixed rate for the full term.' },
      { q: 'Can I see how extra payments help?', a: 'Extra principal payments shorten the loan and reduce interest, so compare scenarios by changing the term.' },
    ],
    note: 'For planning only. Your lender\u2019s figures are the ones that apply.',
  },
  'lorem-ipsum': {
    about:
      'Lorem ipsum is placeholder text derived from a work of Cicero. Designers use it so that attention goes to layout and typography rather than to the meaning of the words. The generator produces paragraphs, sentences or words in the quantity you choose.',
    example:
      'Three paragraphs of placeholder text are enough to test how a blog template wraps lines and spaces headings.',
    tips: [
      'Replace placeholder text with real copy before launch; real content often changes the design.',
      'Use varied lengths to test how your layout handles short and long blocks.',
      'Avoid leaving lorem ipsum in live pages, where it can hurt trust and search visibility.',
    ],
    faqs: [
      { q: 'Does the text mean anything?', a: 'It is scrambled Latin and is not meant to be read.' },
      { q: 'Why not just repeat one sentence?', a: 'Varied text looks like real writing and exposes layout problems more realistically.' },
    ],
  },
  'markdown-editor': {
    about:
      'Markdown is a lightweight syntax for formatting text. Hash symbols create headings, asterisks create emphasis, hyphens create lists and backticks mark code. The editor shows a live preview so you can see the rendered result as you type.',
    example:
      '"# Title" renders as a large heading, "**bold**" as bold text and "- item" as a bullet point.',
    tips: [
      'Leave a blank line between paragraphs and before lists.',
      'Use fenced code blocks with three backticks for multi-line code.',
      'Different platforms support slightly different Markdown extensions, so preview where it will be published.',
    ],
    faqs: [
      { q: 'Where can I use Markdown?', a: 'README files, GitHub issues, documentation sites, note apps and many blogging platforms.' },
      { q: 'Can I export my work?', a: 'Copy the Markdown text and save it in a .md file.' },
    ],
  },
  'password-generator': {
    about:
      'Password strength comes mainly from length and unpredictability. Each extra character multiplies the number of possible combinations. A random 16-character password using upper and lower case letters, digits and symbols has far more possibilities than a short word with a number added.',
    example:
      'A random 12-character password drawn from about 94 printable characters has around 79 bits of entropy, which is well beyond practical brute-force guessing.',
    tips: [
      'Use a different password for every account and store them in a password manager.',
      'Prefer length over complexity rules: 16 or more characters is a good default.',
      'Turn on two-factor authentication wherever it is offered.',
    ],
    faqs: [
      { q: 'Is a generated password better than one I make up?', a: 'Usually yes. People pick predictable patterns; random generation avoids that.' },
      { q: 'Should I reuse a strong password?', a: 'No. If one site leaks it, attackers try it everywhere else.' },
    ],
    note: 'Passwords are generated in your browser.',
  },
  'password-strength': {
    about:
      'The checker scores a password on length, mix of character types and common weaknesses such as repeated characters, sequences and well-known words. A long, unpredictable password scores highest. It cannot know whether the password has already appeared in a data breach.',
    example:
      '"password123" scores low because it is short and extremely common, while a random 16-character string scores high.',
    tips: [
      'Do not type a password you currently use into any online tool. Test a similar one instead.',
      'Passphrases of four or more unrelated words are strong and easier to remember.',
      'Check whether your email appears in breach databases from a trusted service.',
    ],
    faqs: [
      { q: 'Does a high score guarantee safety?', a: 'No. A strong password can still be exposed through phishing or a breach.' },
      { q: 'Is my password sent anywhere?', a: 'The analysis runs in your browser, but you should still avoid entering a live password.' },
    ],
  },
  'percentage-calculator': {
    about:
      'A percentage is a part per hundred. To find X percent of Y, multiply Y by X and divide by 100. To find what percent A is of B, divide A by B and multiply by 100. Percentage change is the difference divided by the original value.',
    example:
      '15 percent of 240 is 36. If a price rises from 80 to 100 the increase is 20 / 80 = 25 percent.',
    tips: [
      'A rise of 50 percent followed by a fall of 50 percent does not return to the start; the result is 75 percent of the original.',
      'Percentage points and percent are different: moving from 10 percent to 12 percent is 2 points but a 20 percent increase.',
      'Always confirm which number is the base.',
    ],
    faqs: [
      { q: 'How do I find the original value?', a: 'Divide the final value by one plus the percentage change expressed as a decimal.' },
      { q: 'What is the difference between markup and margin?', a: 'Markup is profit as a percent of cost; margin is profit as a percent of selling price.' },
    ],
  },
  'phone-number-formatter': {
    about:
      'International phone numbers follow the E.164 format: a plus sign, the country code and the national number with no spaces, up to 15 digits. The formatter arranges digits into the grouping used locally while keeping the underlying number unchanged.',
    example:
      'A US number written as 2025550123 can be shown as (202) 555-0123 locally or as +1 202 555 0123 internationally.',
    tips: [
      'Store phone numbers in E.164 form in databases, and format them only for display.',
      'Remove the leading zero of a national number when adding the country code in most countries.',
      'Formatting does not prove that a number is active.',
    ],
    faqs: [
      { q: 'Does it check that the number is in service?', a: 'No. It only formats and checks structure.' },
      { q: 'Why is the plus sign needed?', a: 'It stands for the international dialing prefix, which varies by country.' },
    ],
  },
  'pregnancy-calculator': {
    about:
      'The estimated due date is calculated as 280 days (40 weeks) from the first day of the last menstrual period, adjusted when your cycle is longer or shorter than 28 days. Pregnancy is divided into three trimesters of roughly 13 weeks each.',
    example:
      'If the last period began on 1 January and the cycle is 28 days, the estimated due date is 8 October.',
    tips: [
      'Only about 4 to 5 percent of babies arrive on the exact due date; a window of a few weeks either side is normal.',
      'An early ultrasound can refine the dating, and your doctor\u2019s date takes priority.',
      'Use the result to plan appointments and screenings with your care provider.',
    ],
    faqs: [
      { q: 'Is the due date exact?', a: 'No. It is an estimate based on averages.' },
      { q: 'What if my cycle is irregular?', a: 'Dating by ultrasound is more reliable. Speak to a healthcare provider.' },
    ],
    note: 'For information only. It is not medical advice.',
  },
  'project-cost-estimator': {
    about:
      'The estimator multiplies hours for each task by an hourly rate, adds a contingency buffer and shows the total with a rough timeline. Breaking a project into tasks such as design, development, testing and deployment makes hidden work visible.',
    example:
      'A 40-hour build, 10 hours of design and 8 hours of testing at 25 per hour is 58 x 25 = 1,450. A 15 percent buffer brings it to about 1,668.',
    tips: [
      'Add a contingency of 10 to 20 percent for unknowns and changes.',
      'Include project management, revisions and deployment time.',
      'Agree the scope in writing, because scope creep is the main cause of overruns.',
    ],
    faqs: [
      { q: 'Is this a binding quote?', a: 'No. It is a planning aid.' },
      { q: 'How do I estimate hours?', a: 'Use past similar tasks and ask the person who will do the work.' },
    ],
    note: 'Estimates are for planning, not a contract price.',
  },
  'qr-generator': {
    about:
      'A QR code encodes text, a link, Wi-Fi details or contact information as a pattern of squares that phone cameras can read. Error correction lets a code still scan when it is slightly damaged or partly covered.',
    example:
      'Encoding https://example.com produces a square code that opens the site when scanned with a phone camera.',
    tips: [
      'Keep strong contrast between the code and its background, and leave a quiet margin around it.',
      'Print at least 2 cm wide and test with more than one phone before mass printing.',
      'Shorter content creates simpler codes that scan faster.',
    ],
    faqs: [
      { q: 'Do QR codes expire?', a: 'Static codes like these do not expire, because the data is built into the pattern.' },
      { q: 'Can I add a logo?', a: 'Small logos can work because of error correction, but always test the scan.' },
    ],
    note: 'The text you enter is sent to the api.qrserver.com service to draw the image, so do not encode sensitive secrets.',
  },
  'random-generator': {
    about:
      'The generator picks numbers at random within the minimum and maximum you set. It uses your browser\u2019s pseudo-random number generator, which is suitable for games, sampling and testing but not for cryptographic keys.',
    example:
      'Asking for five numbers between 1 and 49 might return 7, 14, 22, 31 and 46.',
    tips: [
      'Decide whether duplicates are allowed before generating, for example in a prize draw.',
      'For security tokens use a cryptographically secure source, not a general random tool.',
      'Record the result if you need to prove fairness later.',
    ],
    faqs: [
      { q: 'Is it truly random?', a: 'It is pseudo-random, meaning it follows an algorithm but looks random for everyday use.' },
      { q: 'Can I use it for a lottery?', a: 'It is fine for informal draws. Regulated games need approved systems.' },
    ],
  },
  'recipe-scaler': {
    about:
      'Scaling multiplies every ingredient by the ratio of the servings you want to the servings in the original recipe. The tool applies the same factor to all quantities so proportions stay the same.',
    example:
      'A recipe for 4 uses 200 g flour and 2 eggs. Scaled for 6 people the factor is 1.5, giving 300 g flour and 3 eggs.',
    tips: [
      'Spices, salt and leavening often need less than a straight multiple when scaling up a lot, so taste and adjust.',
      'Larger batches may need longer cooking times and bigger pans.',
      'Weigh ingredients rather than using cups for more reliable results.',
    ],
    faqs: [
      { q: 'What about half an egg?', a: 'Beat one egg and use roughly half by weight or volume.' },
      { q: 'Does cooking time scale too?', a: 'Not directly. Depth and pan size matter more than quantity.' },
    ],
  },
  'roi-calculator': {
    about:
      'Return on investment is the net gain divided by the cost, shown as a percentage: (final value - cost) / cost x 100. Annualized ROI converts a multi-year result into a yearly rate so investments of different lengths can be compared.',
    example:
      'Investing 10,000 and ending with 13,000 gives a gain of 3,000, which is a 30 percent ROI. If that took three years the annualized return is about 9.1 percent.',
    tips: [
      'Include all costs such as fees, taxes and time when comparing options.',
      'ROI ignores risk. A higher return can come with a higher chance of loss.',
      'Compare investments over the same time period.',
    ],
    faqs: [
      { q: 'What is a good ROI?', a: 'It depends on the industry, risk and time horizon, so compare against realistic alternatives.' },
      { q: 'Is this financial advice?', a: 'No. It is a calculation tool only.' },
    ],
    note: 'For information only. It is not financial advice.',
  },
  'roman-numeral': {
    about:
      'Roman numerals use the symbols I (1), V (5), X (10), L (50), C (100), D (500) and M (1000). Symbols are added from largest to smallest, except that a smaller value placed before a larger one is subtracted, as in IV (4) and IX (9). Standard numerals cover 1 to 3,999.',
    example:
      '1994 is written MCMXCIV: M (1000) + CM (900) + XC (90) + IV (4).',
    tips: [
      'A symbol is not repeated more than three times in a row, so 4 is IV, not IIII (clock faces are a traditional exception).',
      'Only I, X and C can be used for subtraction.',
      'There is no zero in classical Roman numerals.',
    ],
    faqs: [
      { q: 'Why does it stop at 3,999?', a: 'Standard notation has no symbol above M, so larger numbers need extra conventions such as bars.' },
      { q: 'Is IC a valid 99?', a: 'No. 99 is XCIX.' },
    ],
  },
  'sleep-calculator': {
    about:
      'Sleep moves through cycles of about 90 minutes. Waking at the end of a cycle, rather than in the middle of deep sleep, often feels less groggy. The tool counts back from your wake time in 90-minute steps and allows time to fall asleep to suggest bedtimes.',
    example:
      'To wake at 7:00 after 6 cycles (9 hours) with a 15-minute fall-asleep time, the suggested bedtime is 9:45 pm.',
    tips: [
      'Most adults do well on 7 to 9 hours, which is 5 to 6 cycles.',
      'Keep a regular schedule, because consistent wake times matter as much as total hours.',
      'Cycle length varies between people and through the night, so treat times as a guide.',
    ],
    faqs: [
      { q: 'Is a 90-minute cycle exact?', a: 'It is an average. Individual cycles range from roughly 80 to 110 minutes.' },
      { q: 'What if I still feel tired?', a: 'Persistent tiredness can have medical causes. Speak to a doctor.' },
    ],
    note: 'For information only. It is not medical advice.',
  },
  'text-converter': {
    about:
      'The converter changes text case and layout: uppercase, lowercase, title case, sentence case, reversed text and removal of extra spaces. Developers also use case styles such as camelCase and snake_case for variable names.',
    example:
      '"hello world example" becomes "Hello World Example" in title case and "hello_world_example" in snake case.',
    tips: [
      'Title case rules differ between style guides, so check small words such as "of" and "the".',
      'Clean extra spaces before counting words or importing text into a spreadsheet.',
      'Use consistent case styles inside a codebase.',
    ],
    faqs: [
      { q: 'Does it handle accented letters?', a: 'Standard letters are converted; results for special alphabets depend on your browser.' },
      { q: 'Can I undo a conversion?', a: 'Keep the original text. A conversion to uppercase cannot recover the original capitalization.' },
    ],
  },
  'text-statistics': {
    about:
      'The tool reports counts of characters, words, sentences and paragraphs and estimates reading time and readability. Readability formulas such as Flesch Reading Ease reward shorter sentences and shorter words.',
    example:
      'A 1,000-word article takes about four to five minutes to read at an average 200 to 250 words per minute.',
    tips: [
      'For web writing, aim for sentences averaging under 20 words.',
      'Check keyword usage in context. Natural writing outperforms repetition.',
      'Use the counts to meet limits such as meta descriptions or social posts.',
    ],
    faqs: [
      { q: 'How is reading time worked out?', a: 'By dividing the word count by an average reading speed.' },
      { q: 'What is a good readability score?', a: 'Scores of 60 to 70 on Flesch Reading Ease are generally considered plain English.' },
    ],
  },
  'time-converter': {
    about:
      'The converter translates between clock formats and timestamps. Unix time counts seconds since 1 January 1970 UTC, which is why developers use it to store moments independent of time zone. It also converts between 12-hour and 24-hour notation.',
    example:
      'The timestamp 1700000000 corresponds to 14 November 2023, 22:13:20 UTC.',
    tips: [
      'Store times in UTC and convert to local time only for display.',
      'Check whether a timestamp is in seconds or milliseconds; milliseconds have three extra digits.',
      'Daylight saving changes can shift local times by an hour.',
    ],
    faqs: [
      { q: 'What is the Unix epoch?', a: 'It is the reference point of 00:00:00 UTC on 1 January 1970.' },
      { q: 'Why is my converted time off by hours?', a: 'Usually a time zone mismatch between the input and your device.' },
    ],
  },
  'timezone-converter': {
    about:
      'Time zones are defined as offsets from UTC, and many regions shift their offset for daylight saving time. The converter takes a time in one location and shows the equivalent local time in others so you can find meeting windows that suit everyone.',
    example:
      '9:00 in Pakistan (UTC+5) is 04:00 UTC and 23:00 the previous evening in New York during US standard time (UTC-5).',
    tips: [
      'Specify the date as well as the time. Daylight saving changes can alter the offset on different dates.',
      'Pakistan and India do not change clocks, but many other countries do, and on different dates.',
      'When scheduling invitations, include the time zone name in the message.',
    ],
    faqs: [
      { q: 'Why do some zones differ by 30 or 45 minutes?', a: 'A few regions, such as India (UTC+5:30) and Nepal (UTC+5:45), use fractional offsets.' },
      { q: 'Does it adjust for daylight saving time?', a: 'Check the displayed offsets for the date you choose, since rules vary by country.' },
    ],
  },
  'tip-calculator': {
    about:
      'The tip equals the bill multiplied by the tip percentage. The total is the bill plus the tip, and splitting divides that total evenly by the number of people. Customary tip rates differ by country.',
    example:
      'A 4,000 bill with an 18 percent tip adds 720, for a total of 4,720. Split among four people, that is 1,180 each.',
    tips: [
      'Some restaurants already add a service charge, so check the bill first.',
      'Calculate the tip on the pre-tax amount if that is your local custom.',
      'Round up to a convenient figure when paying in cash.',
    ],
    faqs: [
      { q: 'How much should I tip?', a: 'In the US 15 to 20 percent is common in restaurants; in many other countries tipping is smaller or optional.' },
      { q: 'Can I split unevenly?', a: 'The tool splits equally. For uneven shares calculate each person\u2019s portion separately.' },
    ],
  },
  'unit-converter': {
    about:
      'Unit conversion multiplies a value by a fixed factor, for example 1 kilometre = 0.621371 miles and 1 kilogram = 2.20462 pounds. Temperature is different because it needs an offset: Fahrenheit = Celsius x 9/5 + 32.',
    example:
      '100 km equals about 62.14 miles, and 25 degrees Celsius equals 77 degrees Fahrenheit.',
    tips: [
      'Check whether you need US or imperial gallons, because they differ by about 20 percent.',
      'Keep extra decimals during multi-step calculations and round only at the end.',
      'Use the same unit system throughout an engineering calculation.',
    ],
    faqs: [
      { q: 'Why do two converters show slightly different answers?', a: 'They may round differently or use more or fewer decimal places in the conversion factor.' },
      { q: 'Is a nautical mile the same as a mile?', a: 'No. A nautical mile is 1.852 km, longer than a statute mile.' },
    ],
  },
  'unit-converter-pro': {
    about:
      'This version covers more categories and units, including length, weight, volume, area, speed, temperature, time and data storage. Each value is converted through a common base unit so any unit can be converted to any other in its category.',
    example:
      '5 gigabytes is 5,000 megabytes in decimal (SI) units, or about 5,120 mebibytes in binary units.',
    tips: [
      'Storage vendors use decimal units while operating systems often show binary ones, which is why a 500 GB drive appears smaller.',
      'Choose the correct category first; units from different categories cannot be converted.',
      'Use scientific notation for very large or small values.',
    ],
    faqs: [
      { q: 'How many units are supported?', a: 'The tool lists over eighty units across its categories.' },
      { q: 'Why does speed show many decimals?', a: 'Conversions between km/h, mph and m/s are not whole numbers.' },
    ],
  },
  'water-intake': {
    about:
      'A common rule of thumb is about 35 ml of water per kilogram of body weight per day, adjusted upward for exercise and hot weather. Water comes from drinks and food, so the figure is a guide to total fluid rather than plain water alone.',
    example:
      'A person weighing 70 kg has a base estimate of 70 x 35 = 2,450 ml, roughly five 500 ml bottles.',
    tips: [
      'Pale yellow urine is a simple sign of adequate hydration.',
      'Drink more when exercising, in hot climates, or during illness with fever or vomiting.',
      'Spread intake through the day rather than drinking large amounts at once.',
    ],
    faqs: [
      { q: 'Do I need eight glasses a day?', a: 'That is a rough guide. Individual needs vary with size, activity and climate.' },
      { q: 'Do tea and coffee count?', a: 'Yes, they contribute to fluid intake.' },
    ],
    note: 'For information only. People with kidney, heart or other conditions should follow their doctor\u2019s advice.',
  },
  'wifi-password-generator': {
    about:
      'A good Wi-Fi password is long and random. WPA2 and WPA3 accept passphrases of 8 to 63 characters, and longer ones resist guessing attacks much better. The generator builds one from the character types you select.',
    example:
      'A 20-character random password mixing letters and numbers would take an impractical amount of time to brute-force.',
    tips: [
      'Choose WPA2 or WPA3 security on your router, not WEP or open networks.',
      'Create a separate guest network with its own password for visitors.',
      'Avoid characters that are hard to type on a TV or game console if you must enter it there.',
    ],
    faqs: [
      { q: 'How often should I change it?', a: 'When someone you no longer trust has it, or if you suspect misuse.' },
      { q: 'Can I share it as a QR code?', a: 'Yes. Use the QR generator tool to make a Wi-Fi QR code, keeping in mind its privacy note.' },
    ],
  },
  'word-counter': {
    about:
      'The counter reports words, characters with and without spaces, sentences and paragraphs as you type. A word is counted as a run of characters separated by whitespace, so hyphenated terms count as one.',
    example:
      'The sentence "Count every word here." contains four words and 23 characters including spaces.',
    tips: [
      'Many platforms have limits, for example 160 characters for an SMS segment or around 155 for a search result description.',
      'Essays and articles are usually judged by word count, so count before submitting.',
      'Paste plain text to avoid hidden formatting characters affecting the count.',
    ],
    faqs: [
      { q: 'Why does another program show a different count?', a: 'Programs differ in how they treat hyphens, numbers and punctuation.' },
      { q: 'Does it work with other languages?', a: 'It counts space-separated words, so languages written without spaces, such as Chinese, need character counts instead.' },
    ],
  },
}
