import { TiThSmallOutline } from "react-icons/ti"
import { MdOutlineFreeBreakfast } from "react-icons/md"
import { TbSoup } from "react-icons/tb"
import { GiNoodles } from "react-icons/gi"
import { MdOutlineFoodBank } from "react-icons/md"
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi"


export const categories=[
    {
      id:1,
      name:"All",
      image:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
    },
     {
      id:2,
      name:"Breakfast",
      image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:3,
      name:"Soups",
      image:<TbSoup className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:4,
      name:"Pasta",
      image:<GiNoodles className="w-[60px] h-[60px] text-green-600"/>
    },
     {
      id:5,
      name:"Main_Course",
      image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:6,
      name:"Pizza",
      image:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:7,
      name:"burger",
      image:<GiHamburger className="w-[60px] h-[60px] text-green-600" />
    }
];