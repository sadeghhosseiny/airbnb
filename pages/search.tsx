import { GetServerSideProps } from "next";
import Image from "next/image";
import { END } from "redux-saga";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { wrapper } from "../store";
import { searchDataRequesting } from "../store/actions";

function Search() {
  return (
    <div>
      <Header searchPage={true} />
      <div className="relative mt-[100px]  lg:mt-[40px] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px]">
        <Image
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2021/01/Option_4_RET_Crop.jpg?w=2048"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store): any => async ({ req, res }) => {
    await store?.dispatch(searchDataRequesting(req));
    store?.dispatch(END);
    await store?.sagaTask?.toPromise();
  });

export default Search;
