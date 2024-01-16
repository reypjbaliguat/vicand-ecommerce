import { Button } from "@mui/material";
import React from "react";

function PerfectAestheticWomen() {
  return (
    <div className="flex basis-full px-24 mb-[120px]">
      <div className="flex basis-1/2 py-[63px] flex-col">
        <span className="font-bold">STYLISH OUTDOOR - WOMEN</span>
        <span className="font-extrabold text-[52px] mb-1">
          A Perfect Aesthetic
        </span>
        <span className="text-lg mb-8 w-[479px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim. Icia consequat duis enimAmet
          minim mollit .
        </span>
        <Button
          className=""
          variant="contained"
          style={{
            backgroundColor: "#141414",
            color: "#ffffff",
            width: 148,
            height: 52,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Shop Women
        </Button>
      </div>
      <div className="flex bg-cover bg-center basis-1/2 bg-[url('https://s3-alpha-sig.figma.com/img/05c1/f5f9/60747eafd180db8fae9c47887e5b2182?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgRsFrOBQlw1A8JhocHqXp~8JkO~EabouPM3Vm3~An3JCLDl4ZDgvHVcDtOmkQ0o17mH4p4TDuhw-1azl1~MXEy2eKI~WPFNC92zxwVIFjxfVjFZvB5g6xDjU9-ebt~Ki-9HXpoLMVtiCMTK~xiX-J-JxFu0SbUV2hIy-gd2bbVYjozoT~Yof8-0IO6FgpVD-~1cIgEzcKNmaunsCbyAytdNMAHvHrxMLo64CKBmOoh80I98Ncbvzw9viNp-ZcclVyye35NAuzEQZasjeFRk6FHgL1qgKyOb7buROP7rPkHbIlEDPeFCrNkaN~372ZpTGunNK254U-nlRQOMb0jBBw__')]"></div>
    </div>
  );
}

export default PerfectAestheticWomen;
