import { test, expect } from '@playwright/test';

const cases = [
  { id: 'Pos_Fun_0001', input: `oyaa hodhin innavadha ?`, expected: `ඔයා හොදින් ඉන්නවද ?` },
  { id: 'Pos_Fun_0002', input: `mama gedhara innee.`, expected: `මම ගෙදර ඉන්නේ.` },
  { id: 'Pos_Fun_0003', input: `issarahata yanna.`, expected: `ඉස්සරහට යන්න.` },
  { id: 'Pos_Fun_0004', input: `mama ehema karanne naehae.`, expected: `මම එහෙම කරන්නේ නැහැ.` },
  { id: 'Pos_Fun_0005', input: `api iiye gedhara giyee.`, expected: `අපි ඊයෙ ගෙදර ගියේ.` },

  { id: 'Pos_Fun_0006', input: `oyaata poddak velaava thiyenavaadha mata kathaa karanna?`, expected: `ඔයාට පොඩ්ඩක් වෙලාව තියෙනවාද මට කතා කරන්න?` },
  { id: 'Pos_Fun_0007', input: `mama adha office gihin passe email ekak check karanavaa.`, expected: `මම අද office ගිහින් පස්සෙ email එකක් check කරනවා.` },
  { id: 'Pos_Fun_0008', input: `heta api movie ekak balamu.`, expected: `හෙට අපි movie එකක් බලමු` },
  { id: 'Pos_Fun_0009', input: `mata adha poddak amaaruyi vagee.`, expected: `මට අද පොඩ්ඩක් අමාරුයි වගේ.` },
  { id: 'Pos_Fun_0010', input: `mama gedhara enna  hadhannee.`, expected: `මම ගෙදර එන්න  හදන්නේ.` },

  { id: 'Pos_Fun_0011', input: `mama adha vaeda karanavaa.`, expected: `මම අද වැඩ කරනවා.` },
  { id: 'Pos_Fun_0012', input: `oyaa adha enavadha?`, expected: `ඔයා  අද එනවද?` },
  { id: 'Pos_Fun_0013', input: `eeka dhenna`, expected: `ඒක දෙන්න` },
  { id: 'Pos_Fun_0014', input: `mata adha sathutu naehae`, expected: `මට අද සතුටු නැහැ` },
  { id: 'Pos_Fun_0015', input: `mama laptop eka open karalaa file tika baeluvaa`, expected: `මම laptop එක open කරලා file ටික බැලුවා` },

  { id: 'Pos_Fun_0016', input: `heta api town ekata gihin shopping karamu`, expected: `හෙට අපි town එකට ගිහින් shopping කරමු` },
  { id: 'Pos_Fun_0017', input: `oyaata puluvannam adha poddak kalin enna`, expected: `ඔයාට පුලුවන්නම් අද පොඩ්ඩක් කලින් එන්න` },
  { id: 'Pos_Fun_0018', input: `adoo ! oyaa meeka hariyata kalaadha ?`, expected: `අඩෝ ! ඔයා මේක හරියට කලාද ?` },
  { id: 'Pos_Fun_0019', input: `eeka hari hari lassanayi`, expected: `ඒක හරි හරි ලස්සනයි` },

  {
    id: 'Pos_Fun_0020',
    input: `mama adha enne naehae.
heta api kathaa karamu.`,
    expected: `මම අද එන්නෙ නැහැ.
හෙට අපි කතා කරමු`
  },
/* small issue */
  {
  id: 'Pos_Fun_0021',
  input: `adha dhavasema mama vaeda karalaa hoDHA vidhihakata mahansiyata pathvuNaa. 
namuth raeeta Lamayi hamuvenna puLuvan nam hodhayi kiyalaa hithenavaa. 
eeka nisaa magee hitha poddak hari venas venavaa.`,
  expected: `අද දවසෙම මම වැඩ කරලා හොඳ විදිහකට මහන්සියට පත්වුණා. 
නමුත් රෑට ළමයි හමුවෙන්න පුළුවන් නම් හොදයි කියලා හිතෙනවා. 
ඒක නිසා මගේ හිත පොඩ්ඩක් හරි වෙනස් වෙනවා.`
},


  {
    id: 'Pos_Fun_0022',
    input: `mama adha office gihin presentation ekak prepare kalaa. 
email harahaa documents tika team ekata yavala passe meeting ekata join una. 
ehema karala raeeta gedhara aavaa.`,
    expected: `මම අද office ගිහින් presentation එකක් prepare කලා. 
email හරහා documents ටික team එකට යවල පස්සෙ meeting එකට join උන. 
එහෙම කරල රෑට ගෙදර ආවා.`
  },

  {
    id: 'Pos_Fun_0023',
    input: `heta api travel karanna hadhannee nisaa adha dhavasema plan karanavaa. 
oyaata puluvannam udhee kalaye enna kiyala kiyannam. 
ehema karoth api loku vaedak karaganna puluvan.`,
    expected: `හෙට අපි travel කරන්න හදන්නේ නිසා අද දවසෙම plan කරනවා. 
ඔයාට පුලුවන්නම් උදේ කලයෙ එන්න කියල කියන්නම්. 
එහෙම කරොත් අපි ලොකු වැඩක් කරගන්න පුලුවන්.`
  },

  {
    id: 'Pos_Fun_0024',
    input: `samahara dhavas valata hitha loku vidhihakata mahansi venavaa. 
namuth ehema una kiyala navaththanna bae. 
ithin podi podi deval karagena idhiriyata yanava kiyala mama hithanavaa.`,
    expected: `සමහර දවස් වලට හිත ලොකු විදිහකට මහන්සි වෙනවා. 
නමුත් එහෙම උන කියල නවත්තන්න බැ. 
ඉතින් පොඩි පොඩි ඩෙවල් කරගෙන ඉදිරියට යනව කියල මම හිතනවා.`
  },

  /* Negative test cases */

    { id: 'Neg_Fun_0001', input: `mama gedhra yanavaa.`, expected: `මම ගෙදර යනවා..` },
  { id: 'Neg_Fun_0002', input: `mamageedharainnee`, expected: `මම ගෙදර ඉන්නේ.` },
  { id: 'Neg_Fun_0003', input: `oyaa enavada???!!!`, expected: `ඔයා  එනවද?` },
  {
    id: 'Neg_Fun_0004',
    input: `mama adha office was very busy nisaa late wuna.`,
    expected: `මම අද office was very busy නිසා late උන.`
  },
  {
    id: 'Neg_Fun_0005',
    input: `eyaa eeka karala eyaaata dunna.`,
    expected: `එයා  ඒක කරල එයා ට ඩුන්න.`
  },
  {
    id: 'Neg_Fun_0006',
    input: `mama heta gedara giyaa kiyala hithanavaa.`,
    expected: `මම හෙට ගෙදර ගියා කියල හිතනවා.`
  },
  {
    id: 'Neg_Fun_0007',
    input: `mama adha     gedhara      enne naehae nisaa    api passe   
kathaa     karamu kiyala     hithanavaa namuth
eka hariyata   convert wennee naehae.`,
    expected: `මම අද     ගෙදර      එන්නෙ නැහැ නිසා    අපි පස්සෙ   
කතා     කරමු කියල     හිතනවා නමුත්
එක හරියට   convert එන්නේ නැහැ.`
  },
  {
    id: 'Neg_Fun_0008',
    input: `mama adha system eka test karala report ekak generate kala.
deployment, configuration, validation saha automation tika
ok namuth final output eka hariyata enne na kiyala
api observe kala.`,
    expected: `මම අද system එක test කරල report එකක් generate කල.
deployment, configuration, validation සහ automation ටික
ඔක් නමුත් final output එක හරියට එන්නෙ නැහැ කියල
අපි observe කල.`
  },
  {
    id: 'Neg_Fun_0009',
    input: `adha dawasema hitha loku widihakata upset una.
mama monavada karanne kiyala hithaganna bae.
ehema una kiyala hariyata explain karanna amarui.`,
    expected: `අද ඩwඅසෙම හිත ලොකු විඩිහකට upset උන.
මම මොනවඩ කරන්නේ කියල හිතගන්න බැ.
එහෙම උන කියල හරියට explain කරන්න අමරුඉ.`
  },
  {
    id: 'Neg_Fun_0010',
    input: `mama adha 3pm gedhara enawaa namuth 2 hours late wenavaa.`,
    expected: `මම අද 3pm ගෙදර එනවා නමුත් 2 hours late wඑනවා.`
  },

];

test.describe('SwiftTranslator Singlish -> Sinhala', () => {
  for (const tc of cases) {
    test(tc.id, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');

      const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
      await inputBox.fill(tc.input);

      await expect(page.getByText(tc.expected)).toBeVisible({ timeout: 10000 });
    });
  }
});
/* Positive UI test */
test('Pos_UI_0001 – Sinhala output updates instantly when input text is modified', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.fill('mama adha gedhara enavaa');

  const outputText1 = await page.waitForFunction(() => {
    const body = document.body?.innerText || '';
    const match = body.match(/[\u0D80-\u0DFF]{3,}/); 
    return match ? match[0] : null;
  }, { timeout: 10000 });

  const firstSinhala = await outputText1.jsonValue();

  await inputBox.fill('mama adha gedhara ennee naehae');

  await expect.poll(async () => {
    const body = await page.locator('body').innerText();
    const match = body.match(/[\u0D80-\u0DFF]{3,}/);
    return match ? match[0] : '';
  }, { timeout: 10000 }).not.toBe(firstSinhala);
});
