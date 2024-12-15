import Hero from "@/components/hero";
import AboutUs from "@/components/Aboutus";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer" 

export default function Home() {
  return (
    <>

       <Hero/>
       
    </>
  );
}



/*NOTES

shortcuts

curser click + alt
alt button press hold kar ke cursor se jahn jahn click karte jaenge wp sab group mein select hoty jaenge.

select + control + D
kisi bhi word ko select kar ke phir control + D dabaty jaenge to us same name ke jitne bhi words honge wo select hoty jaenge group ban kar.

control + shift + tab
agr ghalti se vs code mein top se ham se koi file extension hatt jati hai to ham in short cut se usy wapas laa sakty hain.


overflow-x-auto

ye property animation ki tarhn lagti hai matlab agr hmare div choti screen main section se bahar jaa rhy hain or hamen
unhy scroll mein dikhana hai to ye property use krenge 


body{
    width: 100%;
    max-width: 1280px;
    margin: auto;
}

ye propertys global css mein isliye lgai hain ke ham bata rhy hain hmari HTML ki body har screen pe (100%) rhy or ziyada se
ziyada iska size (1280px) tak bara ho or agr koi screen 1280px se bari hogi to ye uske width mein pori nahi aegi or
(margin: auto;) se khud ko screen ke center mein kar legi.



@layer utilities{
  .myH1{
    font-size: 48px;
    line-height: 57px;
    font-weight: 700;
  }
}

agr aik hi class har jagah ke text mein use ho rhi ho to ham aisy global.css mein utilities bana kar use karty rehty hain.


 {[...Array(6)].map((_, index) =>(

      code past here for unlimited looping....

))}




cards main div from AboutUs component

w-full                           width: 100% rhy
h-[723px] xsm:h-auto             div ki height small screen mein (723) rhy or small se bari screen mein auto ho jaye jitna iska content ho utni height ly
grid                             grid ka use small large dono devices mein
grid-cols-1 xsm:grid-cols-3      small devixe mein sirf (1) column bany or (xsm => 427) se bari device mein 3 columns bany
xsm:grid-rows-2                  small device pe hamne btaya nhi kitne row hon isliye multiple row banenge or bari screen mein sirf 2 rows hony chahiye
gap-x-[24px] xsm:gap-x-[48px]    small device mein divs ke right left mein (24px) ka gap ho or bari screen mein (48px) ka gap ho
gap-y-[48px] xsm:gap-y-[64px]    small device mein divs ke ke opar neechy (48px) ka gap ho or bari screen mein (64px) ka gap ho
mt-[48px] xsm:mt-[80px]          small device mein margin top (48px) ly or large device mein (80px)
overflow-y-auto                 sab se main property jo ke hamen overflow hony waly content ko yani div ke bahar nikalny waly content ko div ke size mein hi rakh kar usy scroll bar dey deti hai.

yahn par hamne aik bari screen size ke section ko mobile device mein chota kar ke uske andar ke content ko scroll bar se chala diyya.


shrink-0 grow-0

cards apas mein shrink na hon or jo inka size hai wahi rhy.

















*/