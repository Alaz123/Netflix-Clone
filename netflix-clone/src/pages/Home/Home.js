import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import RowList from "../../Components/Rows/RowList/RowList";
import Credit from "../../Components/Credit/Credit";

const Home = () => {
	return (
		<>
			<Header />

			<Banner />

			<RowList />

			<Footer />
			<Credit />
		</>
	);
};

export default Home;
