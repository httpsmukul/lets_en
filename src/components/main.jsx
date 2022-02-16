import React from "react";
import "./style/main.css";
import { Input1 } from "./input.jsx";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export const Main = () => {
	const [name, setcompanyname] = React.useState("");
	const [showcompany, setcompany] = useState(false);
	const [city, setcity] = React.useState("");
	const [business_idea, setbusiness_idea] = React.useState("");
	const [business_stage, setbusiness_stage] = useState("");
	const messageRef = useRef("");
	const [showcity, setshowcity] = useState(false);
	const [ques2, setques2] = useState(false);
	const [ques4, setques4] = useState(false);
	const [ques6, setques6] = useState(false);
	const [ques7, setques7] = useState(false);
	const [ques8, setques8] = useState(false);
	const [ques9, setques9] = useState(false);
	const [ques10, setques10] = useState(false);
	const [ques12, setques12] = useState(false);
	const [age_of_estabishment, setage_of_estabishment] = useState("");
	const [Primary_product_service_offered, setPrimary_product_service_offered] =
		useState("");
	const [offered_to, setoffer_to] = useState(" ");
	const [
		secondary_products_servise_offiered,
		setsecondary_products_servise_offiered,
	] = useState("");
	const [processed_products, setprocessed_products] = useState("");
	const [relevant_experience, setrelevant_experience] = useState("");
	const [skill_traning, setskill_traning] = useState("");
	const [establishment_type, setestablishment_type] = useState("");
	const [business_area, setbusiness_area] = useState("");
	const [business_locality, setbusiness_locality] = useState("");
	const [infra_ownership, setinfra_ownership] = useState("");

	const handleChange = (event) => {
		setbusiness_stage(event.target.value);
		setques2(true);
	};

	// useEffect(() => {
	// 	messageRef.current = companyname;
	// }, [companyname]);

	function set_time(data) {
		setTimeout(() => {
			data(true);
		}, 2000);
	}

	const sendMessage = (e) => {
		let data = setcompany;
		set_time(data);
	};
	const sendidea = (e) => {
		let data = setshowcity;
		set_time(data);
	};
	const sendcity = (e) => {
		let data = setcompany;
		set_time(data);
	};
	const handel_ques4 = (e) => {
		setage_of_estabishment(e.target.value);
		setques4(true);
	};
	// 6
	const handel_ques5 = (e) => {
		setPrimary_product_service_offered(e.target.value);
	};
	const handel_ques6 = (e) => {
		setoffer_to(e.target.value);
		setques6(true);
	};
	const handel_ques7 = (e) => {
		setsecondary_products_servise_offiered(e.target.value);
		setques7(true);
	};
	const handel_ques8 = (e) => {
		setprocessed_products(e.target.value);
		setques8(true);
	};
	const handel_ques9 = (e) => {
		setrelevant_experience(e.target.value);
		setques9(true);
	};
	const handel_ques10 = (e) => {
		setskill_traning(e.target.value);
		setques10(true);
	};
	const handel_ques12 = (e) => {
		setestablishment_type(e.target.value);
		// setques12(true);
	};
	const handel_ques13 = (e) => {
		setbusiness_area(e.target.value);
		// setques12(true);
	};
	const handel_ques14 = (e) => {
		setbusiness_locality(e.target.value);
		// setques12(true);
	};
	const handel_ques15 = (e) => {
		setinfra_ownership(e.target.value);
		setques12(true);
	};
	return (
		<>
			<p>company</p>
			<div className="main">
				<div className="main_left">
					<Box
						sx={{
							// display: "flex",
							alignItems: "center",
							"& > :not(style)": { m: 1 },
						}}
						id="box"
					>
						<TextField
							helperText="Please enter company name"
							id="demo-helper-text-misaligned"
							label="Company Name"
							onChange={(e) => setcompanyname(e.target.value)}
							onClick={sendMessage}
						/>

						<TextField
							helperText="Please enter company business_idea"
							id="demo-helper-text-misaligned"
							label="business_idea"
							onChange={(e) => setbusiness_idea(e.target.value)}
							onClick={sendidea}
						/>

						<TextField
							helperText="Please enter company City"
							id="demo-helper-text-misaligned"
							label="City"
							onChange={(e) => setcity(e.target.value)}
							onClick={sendcity}
						/>
					</Box>
					<hr />
					<form>
						{/* __________________________________local_______________________ */}
						<h1>stert with here</h1>
						<p>Stage of business</p>
						<Box
							sx={{
								maxWidth: 400,
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									business_stage
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									helperText="Please enter your name"
									id="demo-simple-select"
									value={business_stage}
									label="business_stage"
									onChange={handleChange}
								>
									<MenuItem value={"Start-up"}>Start-up</MenuItem>
									<MenuItem value={"Scale-up"}>Scale-up</MenuItem>
									{/* <MenuItem value={30}>Thirty</MenuItem> */}
								</Select>
							</FormControl>
						</Box>
						<p>Age of establishment(years) (Enter 0 if it yet to start-up)</p>
						<Box
							sx={{
								maxWidth: 400,
								display: "flex",
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<TextField
								// helperText="Please enter your name"
								id="demo-helper-text-misaligned"
								type="number"
								InputProps={{
									inputProps: {
										max: 100,
										min: 0,
									},
								}}
								label="age_of_estabishment"
								onChange={handel_ques4}
							/>
						</Box>
						{/* ques 5 ______________________________*/}
						<p>Primary Products/Services offerd</p>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<TextField
								// helperText="Please enter company City"
								id="demo-helper-text-misaligned"
								label="Primary_product_service_offered"
								onChange={handel_ques5}
							/>
						</Box>
						{/* question 6 ____________________________ */}
						<p>offfered to</p>
						<Box
							sx={{
								maxWidth: 400,
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									offered to
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="business_stage"
									onChange={handel_ques6}
								>
									<MenuItem value={"End customer"}>End customer</MenuItem>
									<MenuItem value={"Wholesalers"}>Wholesalers</MenuItem>
									<MenuItem value={"Distributors"}>Distributors</MenuItem>
									<MenuItem value={"Retailers"}>Retailers</MenuItem>
									{/* <MenuItem value={30}>Thirty</MenuItem> */}
								</Select>
							</FormControl>
						</Box>
						{/* question 7 */}
						<p>Secondary Products/servies offiered</p>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<TextField
								// helperText="Please enter company City"
								id="demo-helper-text-misaligned"
								label="secondary_products_servise_offiered"
								onChange={handel_ques7}
							/>
						</Box>
						{/* question 8 */}
						<p>
							Processed products (products you produce from the raw materials)
						</p>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<TextField
								// helperText="Please enter company City"
								id="demo-helper-text-misaligned"
								label="processed_products"
								onChange={handel_ques8}
							/>
						</Box>
						{/* question 9 */}
						<p>Year of relevant exprience in this field</p>

						<Box
							sx={{
								maxWidth: 400,
								display: "flex",
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<TextField
								// helperText="Please enter your name"
								id="demo-helper-text-misaligned"
								type="number"
								InputProps={{
									inputProps: {
										min: 0,
									},
								}}
								label="relevant_experience"
								onChange={handel_ques9}
							/>
						</Box>
						<p>Skill training</p>
						<Box
							sx={{
								maxWidth: 400,
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									skill_trainiing
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									helperText="Please enter your name"
									id="demo-simple-select"
									// value={establishment_type}
									label="business_stage"
									onChange={handel_ques10}
								>
									<MenuItem value={"NO formal skill training"}>
										NO formal skill training
									</MenuItem>
									<MenuItem value={"has formal skill traning and certifivate"}>
										has formal skill traning and certifivate
									</MenuItem>
								</Select>
							</FormControl>
						</Box>

						<h1>ques 11 multi selector</h1>
						{/* ques 12 */}
						<p>Establishment type</p>
						<Box
							sx={{
								maxWidth: 400,
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									offered to
								</InputLabel>
								<Select
									labelId="establishment_type"
									// helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="business_stage"
									onChange={handel_ques12}
								>
									<MenuItem value={"Factory"}>Factory</MenuItem>
									<MenuItem value={"Stall"}>Stall</MenuItem>
									<MenuItem value={"Workshop"}>Workshop</MenuItem>
									<MenuItem value={"Mill"}>Mill</MenuItem>
									<MenuItem value={"Boutique"}>Boutique</MenuItem>
									<MenuItem value={"vehicle"}>vehicle</MenuItem>
									<MenuItem value={"Center"}>Center</MenuItem>
									<MenuItem value={"Store"}>Store</MenuItem>
									<MenuItem value={"Farm"}>Farm</MenuItem>
									<MenuItem value={"Plant"}>Plant</MenuItem>
									<MenuItem value={"Processing Unit"}>Processing Unit</MenuItem>
									<MenuItem value={"Shop"}>Shop</MenuItem>
									<MenuItem value={"Vending cart"}>Vending cart</MenuItem>
									<MenuItem value={"Manufacturing unit"}>
										Manufacturing unit
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<p>Name of the area</p>
						<Box
							sx={{
								maxWidth: 400,
								// display: "flex",
								// direction: "row",
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<TextField
								// helperText="Please enter company City"
								id="demo-helper-text-misaligned"
								label="business_area"
								onChange={handel_ques13}
							/>
						</Box>
						{/* <question 14 _________________________________*/}

						<p>Locality of business</p>
						<Box
							sx={{
								maxWidth: 400,
								alignItems: "center",
								"& > :not(style)": { m: 1 },
							}}
						>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									Business_locality
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="business_locality"
									onChange={handel_ques14}
								>
									<MenuItem value={"Urban"}>Urban</MenuItem>
									<MenuItem value={"Rural"}>Rural</MenuItem>
									<MenuItem value={"Semi-urban"}>Semi-urban</MenuItem>
								</Select>
							</FormControl>
							{/* <question 15 */}
							<p>Ownership of infastucture</p>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									infra_ownership
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									// helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="infra_ownership"
									onChange={handel_ques15}
								>
									<MenuItem value={"Sium Rented"}>Sium Rented</MenuItem>
									<MenuItem value={"Leased"}>Leased</MenuItem>
									<MenuItem value={"Self-owned"}>Self-owned</MenuItem>
								</Select>
							</FormControl>
							<br />
							{/* ques16 */}
							<p>
								Establishment area (in square feet)
								<br />
								(Enter 0 if the establishment area is irrelevant)
							</p>
							<TextField
								// helperText="Please enter your name"
								id="demo-helper-text-misaligned"
								type="number"
								InputProps={{
									inputProps: {},
								}}
								label="establishment_area"
							/>
							<h1>multi selectore</h1>
							{/* question 18 */}

							<p>Market research</p>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									market_research
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									// helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="business_stage"
									// onChange={handleChange}
								>
									<MenuItem value={"Not conducted"}>Not conducted</MenuItem>
									<MenuItem value={"Market research"}>
										Market research has been conducted
									</MenuItem>
								</Select>
							</FormControl>
							{/* question 19 */}
							<p>Primary marked</p>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									primary_market
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									// helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="business_stage"
									onChange={handel_ques15}
								>
									<MenuItem value={"Local"}>Local</MenuItem>
									<MenuItem value={"Regional"}>Regional</MenuItem>
									<MenuItem value={"National"}>National</MenuItem>
									<MenuItem value={"International"}>International</MenuItem>
								</Select>
							</FormControl>
							<p>Coustoms</p>
							<TextField
								// helperText="Please enter company City"
								id="demo-helper-text-misaligned"
								label="Coustoms"
								// onChange={(e) => setcity(e.target.value)}
							/>
							<p>Seasons of high sales</p>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									Seasonality
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									// helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="business_stage"
									// onChange={handleChange}
								>
									<MenuItem value={"Consistent sales across all seasons"}>
										Consistent sales across all seasons
									</MenuItem>
									<MenuItem value={"Regional"}>
										Higher sales in festive seasons
									</MenuItem>
									<MenuItem value={"National"}>
										High sales in cropping/cuttivation season
									</MenuItem>
									<MenuItem value={"International"}>
										High seals in peak seasons
									</MenuItem>
								</Select>
							</FormControl>
							<p>Competition</p>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									competition
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									// helperText="Please enter your name"
									id="demo-simple-select"
									// value={business_stage}
									label="business_stage"
									// onChange={handleChange}
								>
									<MenuItem
										value={"No similar goods/service provide in this locality"}
									>
										No similar goods/service provide in this locality
									</MenuItem>
									<MenuItem value={"Only a few similar goods/service"}>
										Only a few similar goods/service
									</MenuItem>
									<MenuItem value={"provides in this locality"}>
										provides in this locality
									</MenuItem>
									<MenuItem
										value={
											"Many similar goods/service provides in this locality"
										}
									>
										Many similar goods/service provides in this locality
									</MenuItem>
								</Select>
							</FormControl>
							<p>List of suppliers</p>
							<TextField
								// helperText="Please enter company City"
								id="demo-helper-text-misaligned"
								label="suppliers"
								// onChange={(e) => setcity(e.target.value)}
							/>
						</Box>
					</form>
				</div>

				{/* test fil;ed______________________ */}
				{/* test fil;ed______________________ */}
				{/* test fil;ed______________________ */}
				{/* test fil;ed______________________ */}
				<div className="main_right">
					{showcompany && (
						<Input1 data={"company name is" + " " + name}></Input1>
					)}
					{/* / */}
					{/* {showcity && <Input1 data={"company name is" + " " + city}></Input1>} */}
					<h1 className="h1">company business_idea '{business_idea}'</h1>
					<h1 className="h1">company city is '{city}'</h1>
					{/* <h1>here we will show</h1> */}
					<hr />
					{ques2 && (
						<h2>
							{name} is looking to {business_stage} their business of
							{business_idea}
						</h2>
					)}
					<br />
					<br />
					<br />
					<br />
					<br />
					{ques4 && (
						<h2>
							This enterprise has been operational since {age_of_estabishment}{" "}
							year and has been serving its customers since then.
						</h2>
					)}
					<br />
					<br />
					<br />
					<br />
					{ques6 && (
						<h2>
							This establishment offers products/servises like-{" "}
							{Primary_product_service_offered} to {offered_to}
						</h2>
					)}
					<br />
					<br />
					<br />
					{ques7 && (
						<h2>
							In addition, the enterprise shell also be involve in -{" "}
							{secondary_products_servise_offiered}.
						</h2>
					)}
					<br />
					<br />
					<br />
					<br />
					<br />
					{ques8 && (
						<h2>
							Other product of the enterprise shell include -
							{processed_products}.
						</h2>
					)}{" "}
					<br />
					<br />
					<br />
					<br />
					<br />
					{ques9 && (
						<h2>
							{name} has relevant exprience of - {relevant_experience} in this
							field.
						</h2>
					)}
					<br />
					<br />
					<br />
					<br />
					<br />
					{ques10 && (
						<h2>The enterpreneur {skill_traning} in this filed of work</h2>
					)}
					<br />
					<br />
					<br />
					<br />
					<br />
					{ques12 && (
						<h2>
							The {establishment_type} is located in {business_locality} area of
							{city} in a {infra_ownership} property.
						</h2>
					)}
				</div>
			</div>
		</>
	);
};
