//style
import "../style/App.css";
import theme from "style/them";

//hook
import useRefreshAuthenticationPage from "hook/useRefreshPage/useRefreshAuthenticationPage";

//https://codepen.io/wikyware-net/pen/dyKPRxQ

function AboutPage() {
  //hook
  useRefreshAuthenticationPage();

  return (
    <div className={`${theme.setPage}`}>
      <p>AboutPage</p>
      <div className=' flex items-start justify-center flex-wrap p-12'>
        <div className='ag-courses_item  mx-4 mb-8 rounded-3xl overflow-hidden'>
          <a href='' className='ag-courses-item_link  relative block px-8 py-6 bg-[#121212] '>
            <div className='ag-courses-item_bg  absolute -top-[75px] -right-[75px] w-32 h-32 rounded-full bg-[#f9b234] z-0' />
            <p className='relative h-20 mt-2 mb-4 text-white text-2xl overflow-hidden z-10'>
              Front-end development
            </p>
            <div>
              <span className='relative mr-2 text-white text-lg z-10'>Start:</span>
              <span className='ag-courses-item_date  relative text-[#f9b234] z-10'>xx.xx.2022</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
