var scene = document.querySelector('a-scene');



const container = document.getElementById("container");
      // const num = 5;
      const margin = 5;
      const zmargin = 8;
      const torusScale = 1;
      const boxScale = 1;

      for (let x = 0; x < 5; x++) {
        console.log("x");
        for (let y = 0; y < 5; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const icosahedron = document.createElement("a-icosahedron");
            icosahedron.setAttribute(
              "position", //marginみたいな
              `${x * margin} ${y * margin} ${z * margin}`
            );
            icosahedron.setAttribute("radius", "0.4");
            icosahedron.setAttribute("color", "#f5f5f5");
            icosahedron.setAttribute("animation", "property: rotation; to: 360 360 360; loop: true; dur: 2000; dir: alternate; easing: easeInOutQuad");
            icosahedron.setAttribute("material", "opacity: 0.5");
            container.appendChild(icosahedron);

          }
        }
      }


      for (let x = 0; x < 1; x++) {
        console.log("x");
        for (let y = 0; y < 4; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${x * margin} ${y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${boxScale} ${1+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "20 0 150");
            box.setAttribute("animation", "property: rotation; to: 0 30 0; loop: true; dur: 1000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.9");
            container.appendChild(box);

            const tetrahedron = document.createElement("a-tetrahedron");
            tetrahedron.setAttribute(
              "position", //marginみたいな
              `${15+x * margin} ${y * margin} ${z * margin}`
            );
            tetrahedron.setAttribute("radius", "1");
            tetrahedron.setAttribute("color", "#f5f5f5");
            // sphere.setAttribute("animation", "property: rotation; to: 120 360 0; loop: true; dur: 2000; dir: alternate; easing: easeInOutQuad");
            tetrahedron.setAttribute("material", "opacity: 0.5");
            container.appendChild(tetrahedron);

          }
        }
      }

      for (let x = 0; x < 1; x++) {
        console.log("x");
        for (let y = 0; y < 3; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${5+x * margin} ${y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${0.3-boxScale} ${1+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "20 0 50");
            // box.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 5000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.8");
            container.appendChild(box);

            const tetrahedron = document.createElement("a-tetrahedron");
            tetrahedron.setAttribute(
              "position", //marginみたいな
              `${10+x * margin} ${y * margin} ${z * margin}`
            );
            tetrahedron.setAttribute("radius", "1.3");
            tetrahedron.setAttribute("color", "#f5f5f5");
            tetrahedron.setAttribute("rotation", "0 40 50");
            tetrahedron.setAttribute("animation", "property: rotation; to: 360 0 360; loop: true; dur: 3000; dir: alternate; easing: easeInOutQuad");
            tetrahedron.setAttribute("material", "opacity: 0.5");
            container.appendChild(tetrahedron);

          }
        }
      }

      for (let x = 0; x < 1; x++) {
        console.log("x");
        for (let y = 0; y < 1; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${5+x * margin} ${y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${0.1-boxScale} ${1+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "20 0 110");
            box.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 5000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.8");
            container.appendChild(box);

            const tetrahedron = document.createElement("a-tetrahedron");
            tetrahedron.setAttribute(
              "position", //marginみたいな
              `${10+x * margin} ${y * margin} ${z * margin}`
            );
            tetrahedron.setAttribute("radius", "0.8");
            tetrahedron.setAttribute("color", "#f5f5f5");
            tetrahedron.setAttribute("rotation", "0 0 150");
            // sphere.setAttribute("animation", "property: rotation; to: 120 360 0; loop: true; dur: 2000; dir: alternate; easing: easeInOutQuad");
            tetrahedron.setAttribute("material", "opacity: 0.5");
            container.appendChild(tetrahedron);

          }
        }
      }

      for (let x = 0; x < 1; x++) {
        console.log("x");
        for (let y = 0; y < 2; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {


            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${x * margin} ${y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${1+boxScale} ${1+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "20 0 10");
            // box.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 5000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.3");
            container.appendChild(box);

            const tetrahedron = document.createElement("a-tetrahedron");
            tetrahedron.setAttribute(
              "position", //marginみたいな
              `${x * margin} ${y * margin} ${z * margin}`
            );
            tetrahedron.setAttribute("radius", "1");
            tetrahedron.setAttribute("color", "#f5f5f5");
            // sphere.setAttribute("animation", "property: rotation; to: 120 360 0; loop: true; dur: 2000; dir: alternate; easing: easeInOutQuad");
            tetrahedron.setAttribute("material", "opacity: 0.5");
            container.appendChild(tetrahedron);

          }
        }
      }

      for (let x = 0; x < 2; x++) {
        console.log("x");
        for (let y = 0; y < 3; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${x * margin} ${y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${1+boxScale} ${1.5+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "50 30 -40");
            box.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 5000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.2");
            container.appendChild(box);

            const tetrahedron = document.createElement("a-tetrahedron");
            tetrahedron.setAttribute(
              "position", //marginみたいな
              `${x * margin} ${10+y * margin} ${z * margin}`
            );
            tetrahedron.setAttribute("radius", "2");
            tetrahedron.setAttribute("color", "#f5f5f5");
            tetrahedron.setAttribute("rotation", "50 30 -40")
            tetrahedron.setAttribute("animation", "property: rotation; to: 360 0 0; loop: true; dur: 2000; dir: alternate; easing: easeInOutQuad");
            tetrahedron.setAttribute("material", "opacity: 0.3");
            container.appendChild(tetrahedron);

          }
        }
      }

      for (let x = 0; x < 1; x++) {
        console.log("x");
        for (let y = 0; y < 1; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${10+x * margin} ${y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${1+boxScale} ${1.5+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "50 30 -40");
            box.setAttribute("animation", "property: rotation; to: 0 0 260; loop: true; dur: 2000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.2");
            container.appendChild(box);

            const tetrahedron = document.createElement("a-tetrahedron");
            tetrahedron.setAttribute(
              "position", //marginみたいな
              `${15+x * margin} ${10+y * margin} ${z * margin}`
            );
            tetrahedron.setAttribute("radius", "2");
            tetrahedron.setAttribute("color", "#f5f5f5");
            tetrahedron.setAttribute("rotation", "50 30 -40")
            tetrahedron.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 6000; dir: alternate; easing: easeInOutQuad");
            tetrahedron.setAttribute("material", "opacity: 0.3");
            container.appendChild(tetrahedron);

          }
        }
      }

      for (let x = 0; x < 3; x++) {
        console.log("x");
        for (let y = 0; y < 4; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${5+x * margin} ${5+y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${1+boxScale} ${0.5+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "0 0 50");
            // box.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 5000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.4");
            container.appendChild(box);

          }
        }
      }

      for (let x = 0; x < 2; x++) {
        console.log("x");
        for (let y = 0; y < 1; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${10+x * margin} ${5+y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${1+boxScale} ${0.5+boxScale} ${0.99-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "0 30 200");
            box.setAttribute("animation", "property: rotation; to: 200 20 100; loop: true; dur: 5000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.8");
            container.appendChild(box);

          }
        }
      }

      for (let x = 0; x < 1; x++) {
        console.log("x");
        for (let y = 0; y < 3; y++) {
          console.log("y");
          for (let z = 0; z < 1; z++) {

            const box = document.createElement("a-box");
            box.setAttribute(
              "position", //marginみたいな
              `${20+x * margin} ${y * margin} ${z * margin}`
            );
            box.setAttribute("scale", `${0.3-boxScale} ${0.6+boxScale} ${0.7-boxScale}`);
            box.setAttribute("color", "#008b8b");
            box.setAttribute("rotation", "20 20 20");
            // box.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 5000; dir: alternate; easing: easeInOutQuad");
            box.setAttribute("material", "opacity: 0.8");
            container.appendChild(box);

            const tetrahedron = document.createElement("a-tetrahedron");
            tetrahedron.setAttribute(
              "position", //marginみたいな
              `${x * margin} ${5+y * margin} ${z * margin}`
            );
            tetrahedron.setAttribute("radius", "1.4");
            tetrahedron.setAttribute("color", "#f5f5f5");
            tetrahedron.setAttribute("rotation", "50 30 -40")
            tetrahedron.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 6000; dir: alternate; easing: easeInOutQuad");
            tetrahedron.setAttribute("material", "opacity: 0.8");
            container.appendChild(tetrahedron);
          }
        }
      }

    //
    //   for (let j = 0; j < 10; j++) {
    //     for (let i = 0; i < 10; i++) {
    //     const text = document.createElement("a-text");
    //     text.setAttribute("value","A");
    //     text.setAttribute("color", "black");
    //     container.appendChild(text);
    //   }
    // }

    // let colors = ["#555233","#DF921D","#878937","#CFC52A","#DC2A41"];
    // let c = random(colors);
    // const sky = document.createElement("a-sky");
    // sky.setAttribute("color","c");
    // container.appendChild(sky);


          container.setAttribute(
            "position", //全体、箱の位置
            `${-num / 2 - margin / 2 - torusScale / 2}
            ${-num / 2 - margin / 2 - torusScale / 2}
            ${-num / 2 - margin / 2 - torusScale / 2}`
          );
  // <a-torus position="0 0 -2" color="#43A367" arc="360" radius="1" radius-tubular="0.1"></a-torus>
