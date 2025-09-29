const fs = require("fs");
const path = require("path");

// Base path for app folder
const basePath = path.join(__dirname, "app");

// Sections
const sections = ["h", "i", "e", "c", "p"];
const audiences = ["women", "men", "teen", "kids"];
const teenSubaudience = ["teena", "teenb"];
const kidsSubaudience = ["girls", "boys", "babygirls", "babyboys", "newborns"];

// Helper to create folder and file
function createFolderWithPage(folderPath) {
    fs.mkdirSync(folderPath, { recursive: true });
    const pagePath = path.join(folderPath, "page.tsx");
    if (!fs.existsSync(pagePath)) {
        fs.writeFileSync(
            pagePath,
            `export default function Page() {
  return <h1>${folderPath.split("app")[1]} page</h1>;
}
`
        );
    }
}

// Start generating structure
["[country]"].forEach((country) => {
    ["[lang]"].forEach((lang) => {
        const langPath = path.join(basePath, country, lang);

        sections.forEach((section) => {
            const sectionPath = path.join(langPath, section);

            audiences.forEach((audience) => {
                if (audience === "teen") {
                    teenSubaudience.forEach((sub) => {
                        createFolderWithPage(path.join(sectionPath, audience, sub));
                    });
                } else if (audience === "kids") {
                    kidsSubaudience.forEach((sub) => {
                        createFolderWithPage(path.join(sectionPath, audience, sub));
                    });
                } else {
                    createFolderWithPage(path.join(sectionPath, audience));
                }
            });

            // For products section `p`, create placeholder category/subcategory/product_id
            if (section === "p") {
                audiences.forEach((audience) => {
                    const audiencePath = path.join(sectionPath, audience);
                    const subaudienceArr =
                        audience === "teen"
                            ? teenSubaudience
                            : audience === "kids"
                                ? kidsSubaudience
                                : [null];

                    subaudienceArr.forEach((sub) => {
                        const subPath = sub ? path.join(audiencePath, sub) : audiencePath;
                        const categoryPath = path.join(subPath, "[category]", "[subcategory]", "[product_id]");
                        createFolderWithPage(categoryPath);
                    });
                });
            }
        });

        // not-found folder
        createFolderWithPage(path.join(langPath, "not-found"));
        // lang root page
        createFolderWithPage(langPath);
    });
});

// root page
createFolderWithPage(basePath);
