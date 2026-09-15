import type { Unit } from './types';

export const units: Unit[] = [
  // ───────────────────────────── Unit 1: Reading ─────────────────────────────
  {
    id: 'climate-feedback',
    title: 'Climate Feedback Loops',
    subtitle: 'Reading · Earth Science',
    icon: '🌍',
    color: '#1cb0f6',
    kind: 'reading',
    passageTitle: 'Amplifying Mechanisms in the Arctic',
    paragraphs: [
      {
        label: 'A',
        text: "Climate scientists distinguish between two broad categories of feedback within the Earth's climate system: those that dampen an initial perturbation and those that amplify it. A negative feedback loop tends to restore equilibrium — for instance, as ocean surface temperatures rise, evaporation increases, and the resulting cloud cover can reflect more incoming solar radiation back into space, partially offsetting the initial warming. Positive feedback loops, by contrast, are self-reinforcing: an initial change triggers a secondary process that intensifies rather than counteracts the original disturbance. It is these amplifying mechanisms that have preoccupied researchers studying the Arctic, where warming has proceeded at roughly three times the global average rate over the past four decades.",
      },
      {
        label: 'B',
        text: 'Chief among these amplifying mechanisms is the ice–albedo feedback. Sea ice and snow cover possess a high albedo, meaning they reflect a substantial proportion of incoming solar radiation rather than absorbing it. As rising temperatures cause this reflective cover to retreat, the darker ocean and land surfaces beneath are exposed; these surfaces absorb far more solar energy than the ice they replace, which in turn accelerates further melting. Although the basic mechanism was first proposed over a century ago, only in the last two decades has satellite data allowed researchers to quantify its contribution with any precision, and even now estimates of its magnitude vary considerably between models.',
      },
      {
        label: 'C',
        text: 'A second, more contentious feedback concerns the vast reserves of organic carbon locked within Arctic permafrost — soil that has remained frozen for millennia. As permafrost thaws, microbial decomposition of this long-dormant organic matter releases both carbon dioxide and methane, a gas with a considerably greater warming potential over short timescales. Some researchers have warned that this process could, beyond a certain threshold, become effectively self-sustaining, continuing to release greenhouse gases even if anthropogenic emissions were curtailed. Others caution against overstating this risk, arguing that the rate of permafrost thaw observed to date remains too gradual to trigger the abrupt, runaway scenario occasionally depicted in popular accounts.',
      },
      {
        label: 'D',
        text: "This disagreement illustrates a broader tension in climate science between the imperative to communicate risk clearly and the discipline's inherent commitment to epistemic caution. Model projections of feedback strength carry substantial uncertainty, not because the underlying physics is disputed, but because feedbacks interact with one another in ways that remain only partially understood. Policymakers, however, rarely have the luxury of waiting for that uncertainty to be resolved. It is precisely this gap — between the provisional nature of scientific consensus and the urgency demanded by policy — that has made the communication of climate feedbacks so fraught.",
      },
    ],
    questions: [
      {
        id: 'cf-1',
        kind: 'tfng',
        statement:
          'Negative feedback loops completely neutralise the initial warming they respond to.',
        answer: 'False',
        explanation:
          "Paragraph A says increased cloud cover \"partially offsetting the initial warming\" — partial, not complete, neutralisation.",
      },
      {
        id: 'cf-2',
        kind: 'tfng',
        statement:
          'The rate of Arctic warming over the last four decades has been roughly triple the global average.',
        answer: 'True',
        explanation:
          'Paragraph A states warming has "proceeded at roughly three times the global average rate over the past four decades."',
      },
      {
        id: 'cf-3',
        kind: 'mcq',
        prompt:
          "According to paragraph B, one reason estimates of the ice–albedo feedback's magnitude still differ between models is that",
        options: [
          'the mechanism itself was only discovered recently',
          'precise satellite measurement is relatively recent, and models still diverge in their estimates',
          'scientists disagree about whether the feedback exists at all',
          'sea ice no longer reflects more solar radiation than open ocean',
        ],
        answerIndex: 1,
        explanation:
          'The paragraph notes satellites have only recently allowed precise quantification, "and even now estimates of its magnitude vary considerably between models." The mechanism itself was proposed over a century ago, and its existence is not disputed.',
      },
      {
        id: 'cf-4',
        kind: 'tfng',
        statement:
          'All climate scientists agree that permafrost thaw will inevitably become self-sustaining.',
        answer: 'False',
        explanation:
          'Paragraph C shows disagreement: "Some researchers have warned... Others caution against overstating this risk." There is no consensus of inevitability.',
      },
      {
        id: 'cf-5',
        kind: 'heading',
        paragraphLabel: 'Paragraph C',
        options: [
          'A resolved scientific consensus on permafrost',
          "A feedback mechanism whose ultimate severity remains disputed",
          'The complete history of permafrost research',
          'Why methane is irrelevant to Arctic warming',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph C presents a mechanism (permafrost carbon release) and explicitly shows researchers disagreeing about how severe or imminent its effects are.',
      },
      {
        id: 'cf-6',
        kind: 'cloze',
        sentence:
          'Methane is described as having a considerably greater ___ than carbon dioxide over short timescales.',
        answer: 'warming potential',
        acceptable: ['warming potential.'],
        explanation:
          'Paragraph C: methane is "a gas with a considerably greater warming potential over short timescales."',
      },
      {
        id: 'cf-7',
        kind: 'mcq',
        prompt:
          'The final paragraph suggests that difficulty in communicating climate feedbacks stems mainly from',
        options: [
          'a lack of sufficient scientific data',
          "the mismatch between science's cautious, provisional nature and the certainty policymaking often demands",
          'disagreement among scientists about basic physics',
          "the media's unwillingness to report on the issue",
        ],
        answerIndex: 1,
        explanation:
          'Paragraph D points to "the gap... between the provisional nature of scientific consensus and the urgency demanded by policy" as the source of the difficulty.',
      },
      {
        id: 'cf-8',
        kind: 'tfng',
        statement: 'The physics underlying climate feedbacks is disputed among scientists.',
        answer: 'False',
        explanation:
          'Paragraph D explicitly states uncertainty exists "not because the underlying physics is disputed, but because feedbacks interact... in ways that remain only partially understood."',
      },
    ],
  },

  // ───────────────────────────── Unit 2: Vocabulary ─────────────────────────────
  {
    id: 'vocab-nuance',
    title: 'Nuance & Ambiguity',
    subtitle: 'Vocabulary · Band 8 Words',
    icon: '📖',
    color: '#ce82ff',
    kind: 'vocabulary',
    questions: [
      {
        id: 'v1-1',
        kind: 'vocab',
        word: 'ubiquitous',
        options: [
          'rare and hard to find',
          'present or found everywhere',
          'extremely old-fashioned',
          'morally questionable',
        ],
        answerIndex: 1,
        explanation: '"Ubiquitous" means appearing or existing everywhere at once.',
      },
      {
        id: 'v1-2',
        kind: 'vocab',
        word: 'ephemeral',
        options: [
          'lasting for a very short time',
          'impossible to measure accurately',
          'highly contagious',
          'deeply rooted and permanent',
        ],
        answerIndex: 0,
        explanation: '"Ephemeral" describes something fleeting — the opposite of permanent.',
      },
      {
        id: 'v1-3',
        kind: 'vocab',
        word: 'cogent',
        options: [
          'needlessly complicated',
          'emotionally manipulative',
          'clear, logical, and convincing',
          'based on opinion rather than evidence',
        ],
        answerIndex: 2,
        explanation: 'A "cogent" argument is one that is clear, well-reasoned, and persuasive.',
      },
      {
        id: 'v1-4',
        kind: 'vocab',
        word: 'precarious',
        options: [
          'extremely expensive',
          'not securely held; dangerously likely to collapse',
          'carefully planned well in advance',
          'widely respected',
        ],
        answerIndex: 1,
        explanation: '"Precarious" describes an unstable position or situation likely to fail.',
      },
      {
        id: 'v1-5',
        kind: 'vocab',
        word: 'ostensible',
        options: [
          'secretly true, though officially denied',
          'stated as the reason, though not necessarily the real one',
          'impossible to disprove',
          'officially confirmed by hard evidence',
        ],
        answerIndex: 1,
        explanation:
          'The "ostensible" reason is the one given or apparent, which may differ from the true, underlying one.',
      },
      {
        id: 'v1-6',
        kind: 'vocab',
        word: 'ambivalent',
        options: [
          'completely indifferent to an outcome',
          'strongly and single-mindedly committed',
          'having mixed or contradictory feelings',
          'unaware that an issue exists',
        ],
        answerIndex: 2,
        explanation:
          '"Ambivalent" means holding two conflicting attitudes or feelings simultaneously.',
      },
      {
        id: 'v1-7',
        kind: 'vocab',
        word: 'ameliorate',
        options: [
          'to make a bad situation better',
          'to make an existing problem worse',
          'to ignore a problem entirely',
          'to postpone a decision indefinitely',
        ],
        answerIndex: 0,
        explanation: '"Ameliorate" means to improve something that was previously unsatisfactory.',
      },
      {
        id: 'v1-8',
        kind: 'vocab',
        word: 'conflate',
        options: [
          'to clearly separate two related ideas',
          'to mistakenly treat two distinct things as one',
          'to prove a claim conclusively',
          'to translate between two languages',
        ],
        answerIndex: 1,
        explanation:
          '"Conflate" means to combine two or more things — often wrongly — into a single, blurred concept.',
      },
      {
        id: 'v1-9',
        kind: 'vocab',
        word: 'tenuous',
        options: [
          'very weak or barely sufficient',
          'extremely strong and well-supported',
          'legally binding',
          'widely accepted as established fact',
        ],
        answerIndex: 0,
        explanation:
          'A "tenuous" connection or argument is flimsy, weak, and barely holds together.',
      },
      {
        id: 'v1-10',
        kind: 'vocab',
        word: 'corroborate',
        options: [
          'to disprove a claim using new evidence',
          'to confirm or support a claim with further evidence',
          'to state something without any evidence',
          'to briefly summarise an argument',
        ],
        answerIndex: 1,
        explanation: '"Corroborate" means to back up or strengthen a claim with supporting evidence.',
      },
    ],
  },

  // ───────────────────────────── Unit 3: Reading ─────────────────────────────
  {
    id: 'behavioural-economics',
    title: 'Behavioural Economics',
    subtitle: 'Reading · Social Science',
    icon: '💰',
    color: '#ff9600',
    kind: 'reading',
    passageTitle: 'The Architecture of Choice',
    paragraphs: [
      {
        label: 'A',
        text: 'For much of the twentieth century, mainstream economic theory rested on the premise that individuals, when making decisions, act as rational agents who consistently seek to maximise their own utility. This idealised figure — often labelled homo economicus — was assumed to weigh available information dispassionately and arrive at the objectively optimal choice. Beginning in the 1970s, however, psychologists Daniel Kahneman and Amos Tversky began to accumulate experimental evidence suggesting that actual human decision-making deviates from this model in systematic, predictable ways. Rather than dismissing these deviations as mere noise, Kahneman and Tversky argued that they reflected the operation of cognitive shortcuts, or heuristics, which — while often useful — can produce consistent and foreseeable errors of judgement.',
      },
      {
        label: 'B',
        text: 'One of the most robust of these findings is the anchoring effect: the tendency for an initial piece of information, even one that is entirely arbitrary, to exert a disproportionate influence over subsequent estimates. In a now-famous demonstration, participants were asked to spin a wheel rigged to land on either a low or a high number, and were then asked to estimate the percentage of African nations in the United Nations. Despite the number being transparently random, those who had seen the high number gave substantially higher estimates than those who had seen the low one. What makes the effect so striking is not merely that an irrelevant number can sway judgement, but that it does so even among participants explicitly told the number is meaningless.',
      },
      {
        label: 'C',
        text: "A related phenomenon, status quo bias, describes the disproportionate weight individuals assign to the option currently in effect, independent of its actual merits relative to the alternatives. This tendency has been exploited, in a manner widely regarded as beneficial, in the design of organ donation policy. Countries that require citizens to actively opt in to becoming donors consistently register far lower donation rates than those that instead require citizens to opt out — that is, where donation is the default unless one explicitly declines. Because the effort required to change one's status is identical in both directions, the stark difference in outcomes cannot be attributed to any difference in underlying preferences; rather, it appears to stem from the default itself acquiring a kind of psychological inertia.",
      },
      {
        label: 'D',
        text: 'Such findings have given rise to so-called nudge theory, which holds that policymakers can steer citizens toward beneficial outcomes by reshaping the architecture of choice — altering defaults, for example — without restricting the range of options available or imposing material incentives. Proponents describe this approach as libertarian paternalism, on the grounds that it preserves freedom of choice while still guiding behaviour. Critics, however, remain unconvinced that the distinction is as clean as its advocates suggest. If a default can be shown to reliably determine an outcome, they argue, then the choice architect is not merely a neutral facilitator but is, in effect, making the decision on citizens’ behalf — raising the question of who should be entrusted with deciding which nudges count as being in the public’s genuine interest.',
      },
    ],
    questions: [
      {
        id: 'be-1',
        kind: 'mcq',
        prompt: 'The term "homo economicus" refers to',
        options: [
          'an early economic theory later proven entirely correct',
          'a hypothetical rational agent who always maximises utility',
          'a psychological bias identified by Kahneman and Tversky',
          'a country with unusually high organ donation rates',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph A defines homo economicus as "this idealised figure" who always weighs information rationally to reach the optimal choice.',
      },
      {
        id: 'be-2',
        kind: 'tfng',
        statement:
          'Kahneman and Tversky regarded deviations from rational decision-making as random errors with no discernible pattern.',
        answer: 'False',
        explanation:
          'They argued the deviations were "systematic, predictable" and reflected identifiable heuristics — not random noise.',
      },
      {
        id: 'be-3',
        kind: 'tfng',
        statement:
          'In the wheel experiment, participants who were told the spun number was meaningless were still influenced by it.',
        answer: 'True',
        explanation:
          'Paragraph B states the effect occurred "even among participants explicitly told the number is meaningless."',
      },
      {
        id: 'be-4',
        kind: 'mcq',
        prompt:
          'Why does the organ donation example provide strong evidence for status quo bias rather than a genuine difference in preferences?',
        options: [
          'Because opt-out countries actively pressure citizens into donating',
          'Because the effort needed to switch status is identical either way, yet outcomes differ sharply',
          'Because opt-in countries have much smaller populations',
          'Because researchers were unable to measure preferences directly',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph C reasons that since switching effort is "identical in both directions," the outcome gap must come from the default itself, not underlying preference.',
      },
      {
        id: 'be-5',
        kind: 'cloze',
        sentence:
          'Nudge theory proposes altering the ___ of choice rather than restricting options or offering material incentives.',
        answer: 'architecture',
        acceptable: ['choice architecture'],
        explanation:
          'Paragraph D: policymakers can steer citizens "by reshaping the architecture of choice."',
      },
      {
        id: 'be-6',
        kind: 'tfng',
        statement:
          'Critics argue that shaping defaults can amount to making the decision for citizens rather than merely facilitating it.',
        answer: 'True',
        explanation:
          'Paragraph D: critics contend the choice architect "is, in effect, making the decision on citizens’ behalf."',
      },
      {
        id: 'be-7',
        kind: 'heading',
        paragraphLabel: 'Paragraph D',
        options: [
          'Why libertarian paternalism has been universally accepted',
          'A defence of nudge theory and the objections raised against it',
          'The history of the term homo economicus',
          'How anchoring effects apply to voting behaviour',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph D outlines what nudge theory proposes and then presents the criticisms levelled against it.',
      },
      {
        id: 'be-8',
        kind: 'mcq',
        prompt: 'In paragraph A, "dispassionately" is closest in meaning to',
        options: ['enthusiastically', 'without emotional bias', 'secretly', 'incorrectly'],
        answerIndex: 1,
        explanation:
          '"Dispassionately" means without being influenced by emotion — i.e. with cool objectivity.',
      },
    ],
  },

  // ───────────────────────────── Unit 4: Vocabulary ─────────────────────────────
  {
    id: 'vocab-academic',
    title: 'Academic Register',
    subtitle: 'Vocabulary · Band 8 Words',
    icon: '🎓',
    color: '#ce82ff',
    kind: 'vocabulary',
    questions: [
      {
        id: 'v2-1',
        kind: 'vocab',
        word: 'pragmatic',
        options: [
          'dealing with things realistically rather than in theory',
          'overly emotional and irrational',
          'strictly following rules without exception',
          'based purely on tradition',
        ],
        answerIndex: 0,
        explanation: '"Pragmatic" means approaching problems in a sensible, practical way.',
      },
      {
        id: 'v2-2',
        kind: 'vocab',
        word: 'arbitrary',
        options: [
          'based on careful, systematic reasoning',
          'based on random choice or whim, not reason',
          'legally required',
          'scientifically proven',
        ],
        answerIndex: 1,
        explanation: '"Arbitrary" describes a decision made without a rational basis or system.',
      },
      {
        id: 'v2-3',
        kind: 'vocab',
        word: 'empirical',
        options: [
          'based on observation or experiment rather than theory',
          'based purely on logical deduction',
          'impossible to verify',
          'based on tradition and custom',
        ],
        answerIndex: 0,
        explanation: '"Empirical" evidence comes from observation, measurement, or experiment.',
      },
      {
        id: 'v2-4',
        kind: 'vocab',
        word: 'discern',
        options: [
          'to loudly announce something',
          'to perceive or recognise, often with difficulty',
          'to completely ignore something',
          'to forcefully argue against something',
        ],
        answerIndex: 1,
        explanation: '"Discern" means to notice or understand something that is not obvious.',
      },
      {
        id: 'v2-5',
        kind: 'vocab',
        word: 'nuanced',
        options: [
          'extremely simple and clear-cut',
          'characterised by subtle shades of meaning or distinction',
          'deliberately vague to avoid commitment',
          'based on a single extreme viewpoint',
        ],
        answerIndex: 1,
        explanation: 'A "nuanced" view captures fine, subtle distinctions rather than broad strokes.',
      },
      {
        id: 'v2-6',
        kind: 'vocab',
        word: 'plausible',
        options: [
          'seeming reasonable or probable',
          'proven beyond any doubt',
          'obviously false',
          'legally binding',
        ],
        answerIndex: 0,
        explanation: '"Plausible" means believable or reasonable, though not necessarily proven.',
      },
      {
        id: 'v2-7',
        kind: 'vocab',
        word: 'redundant',
        options: [
          'essential and irreplaceable',
          'unnecessary because superfluous or repetitive',
          'recently discovered',
          'highly technical',
        ],
        answerIndex: 1,
        explanation: '"Redundant" describes something no longer needed because it is repetitive or surplus.',
      },
      {
        id: 'v2-8',
        kind: 'vocab',
        word: 'substantiate',
        options: [
          'to provide evidence supporting a claim',
          'to contradict a claim with no evidence',
          'to briefly summarise an argument',
          'to withdraw a claim entirely',
        ],
        answerIndex: 0,
        explanation: '"Substantiate" means to prove or support a claim with solid evidence.',
      },
      {
        id: 'v2-9',
        kind: 'vocab',
        word: 'mitigate',
        options: [
          'to make something more severe',
          'to make something less severe or serious',
          'to completely eliminate something',
          'to postpone something indefinitely',
        ],
        answerIndex: 1,
        explanation: '"Mitigate" means to lessen the severity, seriousness, or impact of something.',
      },
      {
        id: 'v2-10',
        kind: 'vocab',
        word: 'paradox',
        options: [
          'a straightforward, uncontroversial fact',
          'a statement that appears contradictory yet may be true',
          'a formal mathematical proof',
          'a common misconception with no truth to it',
        ],
        answerIndex: 1,
        explanation: 'A "paradox" seems self-contradictory on the surface but may still hold true.',
      },
    ],
  },

  // ───────────────────────────── Unit 5: Reading ─────────────────────────────
  {
    id: 'genome-revolution',
    title: 'The Genome Revolution',
    subtitle: 'Reading · Bioethics',
    icon: '🧬',
    color: '#ff4b4b',
    kind: 'reading',
    passageTitle: 'Editing the Human Blueprint',
    paragraphs: [
      {
        label: 'A',
        text: 'The discovery that the CRISPR-Cas9 system — originally identified as a component of bacterial immune defence — could be repurposed to make precise, targeted edits to DNA sequences has been described, with only mild hyperbole, as one of the most consequential biological breakthroughs of the century. Unlike earlier gene-editing techniques, which were often laborious, imprecise, and prohibitively expensive for all but the best-funded laboratories, CRISPR-based editing is comparatively cheap, fast, and accessible even to modestly resourced research groups. This democratisation of genetic engineering has accelerated research into treatments for inherited disorders, but it has also intensified longstanding ethical debates that had, until recently, remained largely theoretical.',
      },
      {
        label: 'B',
        text: "Central to these debates is the distinction between somatic and germline editing. Somatic gene therapy modifies cells within a single individual's body — blood cells or lung tissue, for instance — and any resulting changes are confined to that person and cannot be passed to their offspring. Germline editing, by contrast, alters the DNA of embryos, eggs, or sperm, meaning that any modification, whether intended or not, becomes heritable, propagating through every subsequent generation. It is this heritability that transforms germline editing from a medical intervention affecting a consenting patient into one with consequences for individuals who cannot possibly consent: those not yet born.",
      },
      {
        label: 'C',
        text: 'The gap between what is technically feasible and what is ethically or socially sanctioned was thrown into sharp relief in 2018, when a Chinese researcher announced that he had used CRISPR to edit the embryos of twin girls, purportedly to confer resistance to HIV. The announcement was met with near-universal condemnation from the international scientific community, not primarily because the underlying technique was thought to be unsafe in principle, but because the intervention had circumvented established norms of oversight, scientific review, and informed consent. The researcher was subsequently sentenced to prison, and the episode is now widely cited as a cautionary illustration of how quickly a scientific capability can outpace the ethical and regulatory frameworks meant to govern it.',
      },
      {
        label: 'D',
        text: 'In the aftermath, calls for an international moratorium on heritable genome editing proliferated, yet translating such calls into enforceable policy has proven considerably more difficult than articulating them. Regulatory approaches remain markedly inconsistent across jurisdictions, and no international body currently possesses the authority to compel compliance. Compounding the difficulty is the absence of consensus on where, precisely, a defensible line ought to be drawn: most commentators accept editing intended to prevent severe hereditary disease, yet grow considerably more uneasy at the prospect of edits aimed at enhancing traits such as height or cognitive ability that fall well within the normal range. Until that line is drawn with greater clarity, the field seems destined to oscillate between genuine therapeutic promise and the unsettling spectre of eugenics revisited.',
      },
    ],
    questions: [
      {
        id: 'gr-1',
        kind: 'tfng',
        statement:
          'CRISPR-Cas9 was originally developed by scientists specifically to edit human DNA.',
        answer: 'False',
        explanation:
          'Paragraph A: it "originally identified as a component of bacterial immune defence" and only later repurposed.',
      },
      {
        id: 'gr-2',
        kind: 'mcq',
        prompt:
          'According to paragraph A, what has changed most notably about gene-editing technology since the advent of CRISPR?',
        options: [
          'It has become theoretically possible for the first time',
          'It has become significantly cheaper, faster, and more widely accessible',
          'It is no longer capable of making precise edits',
          'It has eliminated the need for laboratory research entirely',
        ],
        answerIndex: 1,
        explanation:
          'The passage contrasts CRISPR with earlier techniques that were "laborious, imprecise, and prohibitively expensive," noting CRISPR is "comparatively cheap, fast, and accessible."',
      },
      {
        id: 'gr-3',
        kind: 'tfng',
        statement: "Somatic gene editing can be inherited by an individual's children.",
        answer: 'False',
        explanation:
          'Paragraph B: somatic changes "are confined to that person and cannot be passed to their offspring."',
      },
      {
        id: 'gr-4',
        kind: 'mcq',
        prompt: 'The passage indicates that germline editing raises a distinctive ethical problem chiefly because',
        options: [
          'it is far more expensive than somatic editing',
          'it affects future generations who cannot consent to the intervention',
          'it is illegal in every country',
          'it has never been attempted successfully',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph B: germline editing affects "individuals who cannot possibly consent: those not yet born."',
      },
      {
        id: 'gr-5',
        kind: 'tfng',
        statement:
          'International condemnation of the 2018 case was mainly driven by doubts about whether CRISPR could work safely at all.',
        answer: 'False',
        explanation:
          'Paragraph C: condemnation arose "not primarily because the underlying technique was thought to be unsafe in principle, but because" norms of oversight and consent were bypassed.',
      },
      {
        id: 'gr-6',
        kind: 'cloze',
        sentence:
          'The 2018 case is now commonly cited as a warning about how quickly scientific capability can outpace ___ frameworks.',
        answer: 'ethical and regulatory',
        acceptable: ['regulatory', 'the ethical and regulatory'],
        explanation:
          'Paragraph C: the episode shows "how quickly a scientific capability can outpace the ethical and regulatory frameworks meant to govern it."',
      },
      {
        id: 'gr-7',
        kind: 'heading',
        paragraphLabel: 'Paragraph D',
        options: [
          'A clear international consensus on gene editing',
          'The practical and philosophical difficulty of regulating heritable editing',
          'Why moratoria have proven easy to enforce',
          'The history of eugenics in the twentieth century',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph D details both the practical difficulty of enforcement and the unresolved philosophical question of where to draw the line.',
      },
      {
        id: 'gr-8',
        kind: 'mcq',
        prompt: 'In paragraph D, "spectre" is closest in meaning to',
        options: ['a solution', 'a disturbing prospect that looms over something', 'a scientific instrument', 'a legal ruling'],
        answerIndex: 1,
        explanation: '"Spectre" here means a haunting, unsettling possibility — the looming threat of eugenics.',
      },
    ],
  },

  // ───────────────────────────── Unit 6: Vocabulary ─────────────────────────────
  {
    id: 'vocab-connectors',
    title: 'Formal Connectors',
    subtitle: 'Vocabulary · Band 8 Words',
    icon: '🔗',
    color: '#ce82ff',
    kind: 'vocabulary',
    questions: [
      {
        id: 'v3-1',
        kind: 'vocab',
        word: 'notwithstanding',
        options: ['because of', 'in spite of', 'in addition to', 'instead of'],
        answerIndex: 1,
        explanation: '"Notwithstanding" means despite or in spite of something.',
      },
      {
        id: 'v3-2',
        kind: 'vocab',
        word: 'albeit',
        options: ['although', 'therefore', 'similarly', 'namely'],
        answerIndex: 0,
        explanation: '"Albeit" is a formal way of saying "although" or "even though."',
      },
      {
        id: 'v3-3',
        kind: 'vocab',
        word: 'unequivocal',
        options: [
          'leaving no doubt; completely clear',
          'open to several interpretations',
          'mildly uncertain',
          'deliberately misleading',
        ],
        answerIndex: 0,
        explanation: '"Unequivocal" means expressed with total clarity, admitting no ambiguity.',
      },
      {
        id: 'v3-4',
        kind: 'vocab',
        word: 'contentious',
        options: [
          'universally agreed upon',
          'likely to cause disagreement or controversy',
          'financially costly',
          'scientifically proven',
        ],
        answerIndex: 1,
        explanation: '"Contentious" describes a subject likely to provoke argument or dispute.',
      },
      {
        id: 'v3-5',
        kind: 'vocab',
        word: 'tacit',
        options: [
          'explicitly written into law',
          'understood or implied without being stated directly',
          'loudly and publicly declared',
          'legally unenforceable',
        ],
        answerIndex: 1,
        explanation: 'A "tacit" agreement is implied through behaviour rather than openly stated.',
      },
      {
        id: 'v3-6',
        kind: 'vocab',
        word: 'circumvent',
        options: [
          'to confront an obstacle directly',
          'to find a way around a rule or obstacle',
          'to strengthen an existing rule',
          'to publicly announce an obstacle',
        ],
        answerIndex: 1,
        explanation: '"Circumvent" means to avoid or bypass a restriction, often cleverly.',
      },
      {
        id: 'v3-7',
        kind: 'vocab',
        word: 'exacerbate',
        options: [
          'to make a problem worse',
          'to make a problem better',
          'to solve a problem completely',
          'to remain unaffected by a problem',
        ],
        answerIndex: 0,
        explanation: '"Exacerbate" means to worsen a situation that is already bad.',
      },
      {
        id: 'v3-8',
        kind: 'vocab',
        word: 'vindicate',
        options: [
          'to prove someone wrong',
          'to show someone was right or justified after doubt',
          'to blame someone unfairly',
          'to ignore an accusation entirely',
        ],
        answerIndex: 1,
        explanation: '"Vindicate" means to clear someone of blame or confirm they were right.',
      },
      {
        id: 'v3-9',
        kind: 'vocab',
        word: 'superfluous',
        options: [
          'absolutely essential',
          'more than needed; unnecessary',
          'extremely rare',
          'difficult to obtain',
        ],
        answerIndex: 1,
        explanation: '"Superfluous" describes something extra, beyond what is required.',
      },
      {
        id: 'v3-10',
        kind: 'vocab',
        word: 'discrepancy',
        options: [
          'an exact match between two figures',
          'an inconsistency or difference between facts that should agree',
          'a formal agreement between parties',
          'a type of statistical average',
        ],
        answerIndex: 1,
        explanation: 'A "discrepancy" is a gap or inconsistency between things expected to correspond.',
      },
    ],
  },

  // ───────────────────────────── Unit 7: Reading ─────────────────────────────
  {
    id: 'gobekli-tepe',
    title: 'Archaeology & Deep Time',
    subtitle: 'Reading · Archaeology',
    icon: '🏛️',
    color: '#1cb0f6',
    kind: 'reading',
    passageTitle: 'Rewriting the Origins of Monument-Building',
    paragraphs: [
      {
        label: 'A',
        text: 'For much of the twentieth century, archaeologists broadly subscribed to a linear narrative of civilisational development: humans first domesticated plants and animals, the resulting agricultural surplus permitted permanent settlement, and only once settled communities had accumulated sufficient resources did they turn to monumental construction — temples, tombs, and the like. This sequence, agriculture preceding architecture, was treated less as a hypothesis than as an assumed precondition, so foundational that it rarely required explicit defence. The excavation of Göbekli Tepe, a hilltop site in southeastern Turkey, has since forced a substantial reconsideration of that assumption.',
      },
      {
        label: 'B',
        text: "Radiocarbon dating places the site's oldest structures at roughly 11,600 years old, predating both Stonehenge and the Egyptian pyramids by several millennia, and — crucially — predating, by the excavators' own assessment, any convincing evidence of agriculture or permanent settlement in the surrounding region. The site comprises a series of large circular enclosures, each ringed by massive T-shaped limestone pillars, many intricately carved with depictions of animals, arranged and erected by people who, insofar as the evidence indicates, still subsisted primarily through hunting and gathering. That such technically demanding and logistically coordinated construction could have been undertaken by non-agricultural populations runs directly counter to the presumed sequence.",
      },
      {
        label: 'C',
        text: "The implications, if the site's interpretation holds, are considerable. Rather than surplus enabling monument-building, some archaeologists now propose the reverse: that the organisational and logistical demands of large-scale construction — feeding, housing, and coordinating a substantial workforce over extended periods — may have provided the impetus for agricultural experimentation, rather than following in its wake. This is not to say the causal arrow has been definitively reversed; many specialists remain cautious about extrapolating too readily from a single, albeit remarkable, site, noting that a sample size of one is a precarious foundation on which to overturn a model built from decades of accumulated evidence elsewhere.",
      },
      {
        label: 'D',
        text: 'This caution reflects something more general about archaeological inference. The discipline proceeds, of necessity, from an incomplete and unevenly preserved record, and any given site can only ever offer indirect testimony as to what it does not, rather than definitively cannot, contain. A single extraordinary discovery rarely overturns a well-established model outright; more typically, it introduces friction, prompting researchers to hold the old framework more provisionally while they search for corroborating or disconfirming evidence elsewhere. Göbekli Tepe may yet prove to be an anomaly rather than the harbinger of a new consensus — but even that possibility does not diminish its capacity to have already reshaped the questions the field considers worth asking.',
      },
    ],
    questions: [
      {
        id: 'gt-1',
        kind: 'tfng',
        statement:
          'The traditional model held that agricultural surplus was a necessary precondition for monumental construction.',
        answer: 'True',
        explanation:
          'Paragraph A: "the resulting agricultural surplus permitted permanent settlement, and only once... did they turn to monumental construction."',
      },
      {
        id: 'gt-2',
        kind: 'mcq',
        prompt: 'Why is Göbekli Tepe considered significant to the traditional model described in paragraph A?',
        options: [
          'It is the oldest agricultural site ever found',
          'It appears to be a monumental site built before evidence of agriculture or settlement existed nearby',
          'It proves that hunter-gatherers never built anything of significance',
          'It was built using techniques identical to those used at Stonehenge',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph B says the site predates "any convincing evidence of agriculture or permanent settlement in the surrounding region," contradicting the traditional sequence.',
      },
      {
        id: 'gt-3',
        kind: 'tfng',
        statement: 'Radiocarbon dating shows that Göbekli Tepe was constructed after the Egyptian pyramids.',
        answer: 'False',
        explanation: 'Paragraph B says it predates the pyramids "by several millennia."',
      },
      {
        id: 'gt-4',
        kind: 'tfng',
        statement:
          'Most archaeologists now agree with certainty that construction demands directly caused the invention of agriculture.',
        answer: 'False',
        explanation:
          'Paragraph C states "the causal arrow has [not been] definitively reversed" and that "many specialists remain cautious."',
      },
      {
        id: 'gt-5',
        kind: 'mcq',
        prompt: 'The phrase "a sample size of one is a precarious foundation" (paragraph C) is used to suggest that',
        options: [
          'Göbekli Tepe is not a genuine archaeological site',
          'drawing sweeping conclusions from a single site is risky',
          'archaeologists have collected far too much data already',
          'the dating of the site is likely inaccurate',
        ],
        answerIndex: 1,
        explanation:
          'It cautions against overturning a well-evidenced model based on evidence from just one site.',
      },
      {
        id: 'gt-6',
        kind: 'cloze',
        sentence:
          'The passage states that a single remarkable discovery rarely overturns an established model outright, but instead introduces ___, prompting a more provisional stance.',
        answer: 'friction',
        explanation:
          'Paragraph D: "more typically, it introduces friction, prompting researchers to hold the old framework more provisionally."',
      },
      {
        id: 'gt-7',
        kind: 'heading',
        paragraphLabel: 'Paragraph D',
        options: [
          'Why archaeology should abandon inference entirely',
          'What a single extraordinary find can, and cannot, establish',
          "A full account of Göbekli Tepe's construction techniques",
          'The definitive resolution of the agriculture-first debate',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph D discusses the limits of what one site can prove and how it reshapes future inquiry without settling the debate.',
      },
      {
        id: 'gt-8',
        kind: 'mcq',
        prompt: 'In paragraph D, "harbinger" most nearly means',
        options: ['an opponent', 'a sign that something is coming', 'a type of ancient tool', 'a false conclusion'],
        answerIndex: 1,
        explanation: 'A "harbinger" is something that signals or foreshadows a future event.',
      },
    ],
  },

  // ───────────────────────────── Unit 8: Reading (final) ─────────────────────────────
  {
    id: 'attention-economy',
    title: 'The Attention Economy',
    subtitle: 'Reading · Technology & Ethics',
    icon: '📱',
    color: '#ff4b4b',
    kind: 'reading',
    passageTitle: 'The Business of Capturing Attention',
    paragraphs: [
      {
        label: 'A',
        text: "The term 'attention economy' captures an inversion characteristic of digital markets: whereas the classical economic problem concerns the allocation of scarce goods among competing wants, many of the most valuable firms of the past two decades have instead treated a fixed and finite resource — the collective attention of their users — as the commodity to be captured and monetised. Because advertising revenue scales, roughly, with the amount of time users spend engaging with a platform, firms operating under this model face a structural incentive not merely to satisfy user needs efficiently, but to maximise the duration and frequency of engagement, irrespective of whether that engagement serves the user's own considered interests.",
      },
      {
        label: 'B',
        text: 'The design techniques through which this maximisation is pursued draw, often explicitly, on decades of behavioural psychology. Foremost among these is the variable ratio reinforcement schedule, a pattern in which rewards are delivered unpredictably rather than after a fixed number of actions — the same principle that underlies the enduring appeal of slot machines. Features such as the infinite scroll, which removes the natural stopping cues a paginated interface would otherwise provide, and push notifications engineered to arrive at moments calculated to maximise the likelihood of re-engagement, exploit this same anticipatory psychology: it is not the reward itself but its unpredictability that proves most effective at sustaining compulsive checking behaviour.',
      },
      {
        label: 'C',
        text: "Not all scholars, however, are comfortable describing this phenomenon using the vocabulary of addiction. Framing excessive platform use in clinical terms, critics contend, risks individualising what is more accurately understood as a structural problem: it implicitly locates the deficiency in the user's willpower rather than in design choices deliberately engineered, by teams of specialists with access to vast behavioural datasets, to override that willpower. This objection is compounded by a further asymmetry: meaningful consent presupposes that both parties possess comparable information about what is being agreed to, yet platforms typically understand the psychological mechanisms they deploy far more precisely than the users being subjected to them ever could. Under such conditions, critics argue, holding users primarily responsible for their own 'overuse' obscures where the more significant leverage for change actually resides.",
      },
      {
        label: 'D',
        text: "Translating this critique into effective policy, however, has proven far from straightforward. Proposals have included mandatory default time limits, requirements that algorithmic recommendation systems be independently auditable, and outright prohibitions on specific design patterns deemed manipulative. Each faces the same underlying obstacle: manipulative design is notoriously difficult to define with the precision that legislation requires, and features that some regard as exploitative, others defend as simply good, engaging design — a distinction regulators have so far struggled to draw in enforceable terms. Voluntary industry self-regulation, meanwhile, has generally proven insufficient, unsurprisingly, given that the commercial incentives driving engagement-maximising design remain largely unchanged. Whether sustained human attention can be meaningfully safeguarded as a kind of public good, in the way that environmental regulation treats clean air or water, or whether it will instead remain governed chiefly by market forces, is a question that current policy has, at best, only begun to answer.",
      },
    ],
    questions: [
      {
        id: 'ae-1',
        kind: 'mcq',
        prompt: 'The "inversion" referred to in paragraph A is best described as',
        options: [
          'a shift from advertising-based revenue to subscription-based revenue',
          'a shift in which attention, rather than goods, becomes the scarce resource being allocated',
          'a decline in the classical economic problem of scarcity altogether',
          'a shift from digital markets back to physical markets',
        ],
        answerIndex: 1,
        explanation:
          'The passage contrasts the classical problem of allocating scarce goods with firms instead treating "the collective attention of their users" as the resource to capture.',
      },
      {
        id: 'ae-2',
        kind: 'tfng',
        statement:
          "Platforms are structurally incentivised to maximise user engagement regardless of whether this serves users' own interests.",
        answer: 'True',
        explanation:
          'Paragraph A: firms face incentive "to maximise the duration and frequency of engagement, irrespective of whether that engagement serves the user\'s own considered interests."',
      },
      {
        id: 'ae-3',
        kind: 'tfng',
        statement:
          'Variable ratio reinforcement means rewards are delivered after a fixed, predictable number of actions.',
        answer: 'False',
        explanation:
          'Paragraph B: rewards are "delivered unpredictably rather than after a fixed number of actions."',
      },
      {
        id: 'ae-4',
        kind: 'mcq',
        prompt: 'Infinite scroll is described as effective mainly because it',
        options: [
          'provides more accurate information than paginated interfaces',
          'removes natural stopping cues that would otherwise prompt users to disengage',
          "reduces the overall time users spend on a platform",
          'was designed independently of behavioural psychology research',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph B: infinite scroll "removes the natural stopping cues a paginated interface would otherwise provide."',
      },
      {
        id: 'ae-5',
        kind: 'tfng',
        statement:
          "All scholars agree that 'addiction' is the most accurate and useful term for describing excessive platform use.",
        answer: 'False',
        explanation:
          'Paragraph C opens: "Not all scholars... are comfortable describing this phenomenon using the vocabulary of addiction."',
      },
      {
        id: 'ae-6',
        kind: 'mcq',
        prompt: 'Critics of the addiction framing argue that it is problematic chiefly because it',
        options: [
          'exaggerates how serious the problem really is',
          'shifts responsibility onto individual users and away from deliberate design choices',
          'is too clinical and scientific in tone',
          'has never been supported by any psychological research',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph C: framing it as addiction "locates the deficiency in the user\'s willpower rather than in design choices."',
      },
      {
        id: 'ae-7',
        kind: 'cloze',
        sentence:
          'Critics argue meaningful consent requires that both parties possess comparable ___ about what is being agreed to.',
        answer: 'information',
        explanation:
          'Paragraph C: "meaningful consent presupposes that both parties possess comparable information about what is being agreed to."',
      },
      {
        id: 'ae-8',
        kind: 'tfng',
        statement:
          'The passage states that voluntary industry self-regulation has generally proven sufficient to address these concerns.',
        answer: 'False',
        explanation:
          'Paragraph D: "Voluntary industry self-regulation, meanwhile, has generally proven insufficient."',
      },
      {
        id: 'ae-9',
        kind: 'heading',
        paragraphLabel: 'Paragraph D',
        options: [
          'A settled legal definition of manipulative design',
          'The practical obstacles to regulating attention-maximising design',
          'Why environmental regulation is a flawed model to follow',
          'Evidence that self-regulation has succeeded',
        ],
        answerIndex: 1,
        explanation:
          'Paragraph D lists policy proposals and the recurring obstacles — definitional difficulty and misaligned incentives — that undermine each of them.',
      },
      {
        id: 'ae-10',
        kind: 'mcq',
        prompt: 'In paragraph C, "compounded" is closest in meaning to',
        options: ['resolved', 'made worse or more complex by an additional factor', 'disproven', 'simplified'],
        answerIndex: 1,
        explanation:
          '"Compounded" means intensified or added to — here, the objection is made stronger by a further issue (the information asymmetry).',
      },
    ],
  },
];

export const PASS_THRESHOLD = 0.7;
