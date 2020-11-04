const $d =document,
      $skills = $d.getElementById("skills"),
      $templateSkill = $d.getElementById("template-skills").content,
      $fragmentSkill = $d.createDocumentFragment(),
      skillsContent = [
          ['PHP',86],
          ['JavaScript',92],
          ['Node JS',90],
          ['Express JS',89],
          ['HTML5',88],
          ['CSS',78],
      ]

      skillsContent.forEach(el => {
          $templateSkill.querySelector("h5").textContent = el[0];
          $templateSkill.querySelector("span").textContent = `${el[1]}%`;
          $templateSkill.getElementById("progress").setAttribute("data-width", el[1]);
          let $clone = $d.importNode($templateSkill,true);
          $fragmentSkill.appendChild($clone);
      });
      $skills.appendChild($fragmentSkill);
// async function getAllInfo () {
//     try {
//      const response = await axios.get('https://jstesting.cdn.prismic.io/api/v2/documents/search?ref=X5tnLBEAACAAuuGR');
//      return response;
//     } catch (error) {
//         console.log(error);
//     }
// };

// getAllInfo()
//             .then(r =>{
//                 console.log(r);
//             })