//Data

const reservation_list = [
{
	reservation_no :  1001001001,
	movie_name : "Jocker",
	cinema_branch: "강남",
	screen_no: 2,
	date : "2019-99-99",
	showing_start_time:"10:30",
	showing_end_time:"12:30",
	headcount : 2,
	seat_no : [1,2],
	payment_amount : 10000
},
{
	reservation_no :  1001001002,
	movie_name : "겨울왕국",
	cinema_branch: "서현",
	screen_no: 3,
	date : "2019-99-99",
	showing_start_time:"15:45",
	showing_end_time:"17:50",
	headcount : 3,
	seat_no : [11,12,13],
	payment_amount : 15000
}
];



const cuppon_list2 =[	{cuppon_name : "통신사_할인쿠폰",
	cuppon_discounts : 2000,
	cuppon_expireDate : "2019-99-99"
	},
	{cuppon_name : "무료_할인쿠폰",
	cuppon_discounts : 3000,
	cuppon_expireDate : "2019-99-99"
	},
	{cuppon_name : "이벤트_할인쿠폰",
	cuppon_discounts : 1000,
	cuppon_expireDate : "2019-99-99"
	}
]

let reservation_list_load = false;
let cuppon_list_load = false;
//element Ref
const User_Info = document.querySelector("#User_Info");
const Reservation_list = document.querySelector("#reservation_list");
const Reservation_list_container = document.querySelector("#reservation_list_container");

const Cuppon_list = document.querySelector("#cuppon_list");
const Cuppon_list_container = document.querySelector("#cuppon_list_container");


const make_reservationList = function(){
	const Reservation_list_container = document.querySelector("#reservation_list_container");

	for(var i=0;i<reservation_list.length;i++){
		const newItem = document.createElement("div");
		const newItemInfo = document.createElement("div");
		const reservation_no = document.createElement("span");
		const movie_name = document.createElement("span");
		const movie_image = document.createElement("div");
		const cinema_branch = document.createElement("span");
		const screen_no = document.createElement("span");
		const date = document.createElement("span");
		// const showing_start_time = document.createElement("span");
		// const showing_end_time = document.createElement("span");
		const seat_no = document.createElement("span");
		const payment_amount = document.createElement("span");
		const cancel = document.createElement("div");

		const reservation_noText = document.createTextNode("예매번호 :"+reservation_list[i].reservation_no);
		const movie_nameText = document.createTextNode("name : "+reservation_list[i].movie_name);
		const cinema_branchText = document.createTextNode("상영지점 :"+reservation_list[i].cinema_branch);
		const screen_noText = document.createTextNode("상영관 :"+reservation_list[i].screen_no+"관");
		const dateText = document.createTextNode( "시간 :"+ reservation_list[i].date + " " + reservation_list[i].showing_start_time + "~"+ reservation_list[i].showing_end_time);
		// const showing_start_timeText = document.createTextNode(reservation_list[i].showing_start_time);
		// const showing_end_timeText = document.createTextNode(reservation_list[i].showing_end_time);
		const payment_amountText = document.createTextNode("결재금액 :"+reservation_list[i].payment_amount);
		const cancelText = document.createTextNode("cancel");

		let seat_no_string = "관람 좌석 :";		
		for(var k =0; k<reservation_list[i].seat_no.length;k++){
			seat_no_string += reservation_list[i].seat_no[k]+ "  ";
		}
		const seat_noText = document.createTextNode(seat_no_string);

		reservation_no.appendChild(reservation_noText);
		movie_name.appendChild(movie_nameText);
		cinema_branch.appendChild(cinema_branchText);
		screen_no.appendChild(screen_noText);
		date.appendChild(dateText);
		// showing_start_time.appendChild(showing_start_timeText);
		// showing_end_time.appendChild(showing_end_timeText);
		seat_no.appendChild(seat_noText);
		payment_amount.appendChild(payment_amountText);
		cancel.appendChild(cancelText);

		newItem.classList.add('reservation_list_item');
		movie_image.classList.add('movie_image');

		reservation_no.classList.add('reservation_no');
		movie_name.classList.add('movie_name');
		cinema_branch.classList.add('cinema_branch');
		screen_no.classList.add('screen_no');
		date.classList.add('date');
		// showing_start_time.classList.add('showing_start_time');
		// showing_end_time.classList.add('showing_end_time');
		seat_no.classList.add('seat_no');
		payment_amount.classList.add('payment_amount');
		cancel.classList.add('cancel');
		newItemInfo.classList.add('Info');

		newItemInfo.appendChild(reservation_no);
		newItemInfo.appendChild(movie_name);
		newItemInfo.appendChild(cinema_branch);
		newItemInfo.appendChild(screen_no);
		newItemInfo.appendChild(date);
		newItemInfo.appendChild(seat_no);
		newItemInfo.appendChild(payment_amount);
		newItemInfo.appendChild(cancel);

		newItem.appendChild(newItemInfo);
		newItem.appendChild(movie_image);

		Reservation_list_container.appendChild(newItem);
	}
}

const toggle_reservationList = function(){
	if(reservation_list_load == false){
		make_reservationList();
		reservation_list_load = true;
	}
	this.classList.toggle('hidden');
};

const make_cupponList = function(){
	const Cuppon_List = document.querySelector("#cuppon_list_container");
	if(cuppon_list2.length == 0){
		Cuppon_List.appendChild(document.createElement(document.createTextNode("보유하신 쿠폰이 없습니다")));
	}
	for(var i=0;i<cuppon_list2.length;i++){
		const newCuppon = document.createElement("li");
		const newCuppon_name= document.createElement("h5");
		const newCuppon_discounts = document.createElement("h5");
		const newCuppon_expiredate= document.createElement("h5");

		newCuppon.classList.add("cuppon-item");
		newCuppon_name.classList.add("cuppon-name");
		newCuppon_discounts.classList.add("cuppon-discounts");
		newCuppon_expiredate.classList.add("cuppon-expireDate");

		const newCuppon_discountsText = document.createTextNode("쿠폰 금액 : "+cuppon_list2[i].cuppon_discounts);
		const newCuppon_nameText = document.createTextNode("쿠폰 이름 : "+cuppon_list2[i].cuppon_name);
		const newCuppon_expiredateText = document.createTextNode("쿠폰 만기일 : "+cuppon_list2[i].cuppon_expireDate);

		newCuppon_name.appendChild(newCuppon_nameText);
		newCuppon_discounts.appendChild(newCuppon_discountsText);
		newCuppon_expiredate.appendChild(newCuppon_expiredateText);

		newCuppon.appendChild(newCuppon_name);
		newCuppon.appendChild(newCuppon_discounts);
		newCuppon.appendChild(newCuppon_expiredate);

		Cuppon_List.appendChild(newCuppon);
	};
}

const toggle_cupponList = function(){
	if(cuppon_list_load == false){
		make_cupponList();
		cuppon_list_load = true;
	}
	this.classList.toggle('hidden');
};


Reservation_list.addEventListener('click',toggle_reservationList.bind(Reservation_list_container));
Cuppon_list.addEventListener('click',toggle_cupponList.bind(Cuppon_list_container));


