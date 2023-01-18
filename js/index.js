/* 주문내역에 보여주기 */
const productArr={
    "food1" : {'name':"치킨 플레이트",'count':0,'price':5900 },
    "food2" : {'name':'포크 플레이트','count':0,'price':7900 },
    "food3" : {'name':'비프 플레이트','count':0,'price':10900 },
    "food4" : {'name':'치킨 데리야끼 덮밥','count':0,'price':6900 },
    "food5" : {'name':'포크 명이나물 덮밥','count':0,'price':8900 },
    "food6" : {'name':'비프 와사비 덮밥','count':0,'price':11900 },
    "food7" : {'name':'무지방 그릭 요거트','count':0,'price':4900 },
    "food8" : {'name':'아미노 드링크','count':0,'price':2500 },
    "food9" : {'name':'프로틴 쉐이크','count':0,'price':4500 } 
};

function orderList(productName,productPrice){
    $.each(productArr, function(index, item){
            if(productName == item.name){
                if(item.count == 0){
                    item.count = countPlus(item.count);
                    let tempStringS = `
                        <section class='bg'>
                            <span class="product-name">${productName}</span>
                            <div class="flexBox">
                                <img class="${index}-img" src="./img/${productName}.png" alt="${productName}">
                                <div class="list-count-btn" id="${index}">
                                    <span class="product-count">${item.count}</span>
                                </div>
                                <div class="product-price" id="${index}">
                                    `;
                                tempStringS+=`<span class="product-total-price">`;
                                tempStringS+= productPrice +'</span>';
                                tempStringS+=`
                                    <span>원</span>
                                </div>
                            </div>
                        </section>
                    `;
                    $('.listProduct').append(tempStringS);
                    console.log(tempStringS);
                } else if(item.count>0){
                    this.count = countPlus(this.count);                                          
                    let productPriceT = orderPrice(item.count, item.price);
                    $('#'+index+'>.product-count').html(this.count);
                    $('#'+index+'+ div > .product-total-price').html(commaFunc(productPriceT));
                }    
            }             
    });
}
//이미지옆 카운트 올리기
function countPlus(count){
    count++;
    return count;
}
// 개별 가격 계산
function orderPrice(count, price){
    orderpay = count*price
    return orderpay
}
// 뒤에서 세번째에 , 
function commaFunc(target_number){
    let temp_target = String(target_number);
    let comma_regex = /\B(?=(\d{3})+(?!\d))/g;
    return temp_target.replace(comma_regex,",");
}
//콤마 숫자 변환
function stringNumberToInt(stringNumber){
    return parseInt(stringNumber.replace(/,/g , ''));
}



window.onload = function () {
    /* 음식 누르면 주문내역에 담기 */
    $('.click-menu').on('click',function(){
        let productName = $(this).children('.food-img + li').children('span').html();
        let productPrice = $(this).children('.food-img + li').next('li').children('span').html();
        console.log(productPrice)
        orderList(productName,productPrice);
    });

    /* 금액박스 */
    let comma = "";
    let totalPrice = 0;
    let totalResult = 0;
    let startCount = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    const totalMoney = [5900, 7900, 10900, 6900, 8900, 11900, 4900, 2500, 4500];
    const chargeMoney = [50000, 10000, 5000, 1000, 500, 100];
    const chargeText = [50000, 10000, 5000, 1000, 500, 100];

    $(".Img1, .Img2, .Img3, .Img4, .Img5, .Img6, .Img7, .Img8, .Img9").on("click", function () {
        let $this = $(this);
        if ($this.hasClass("Img1")) {
            totalPrice += totalMoney[0];
            $(".numberBox1").html(startCount[0]++);
        } else if ($this.hasClass("Img2")) {
            totalPrice += totalMoney[1];
            $(".numberBox2").html(startCount[1]++);
        } else if ($this.hasClass("Img3")) {
            totalPrice += totalMoney[2];
            $(".numberBox3").html(startCount[2]++);
        } else if ($this.hasClass("Img4")) {
            totalPrice += totalMoney[3];
            $(".numberBox4").html(startCount[3]++);
        } else if ($this.hasClass("Img5")) {
            totalPrice += totalMoney[4];
            $(".numberBox5").html(startCount[4]++);
        } else if ($this.hasClass("Img6")) {
            totalPrice += totalMoney[5];
            $(".numberBox6").html(startCount[5]++);
        } else if ($this.hasClass("Img7")) {
            totalPrice += totalMoney[6];
            $(".numberBox7").html(startCount[6]++);
        } else if ($this.hasClass("Img8")) {
            totalPrice += totalMoney[7];
            $(".numberBox8").html(startCount[7]++);
        } else if ($this.hasClass("Img9")) {
            totalPrice += totalMoney[8];
            $(".numberBox9").html(startCount[8]++);
        };
        comma = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#totalBox").html(comma);
    });

    /* 돈 클릭하면 금액 */
    $(".m50000, .m10000, .m5000, .m1000, .m500, .m100").on("click", function () {
        let $this = $(this);
        if ($this.hasClass("m50000")) {
            totalResult += chargeMoney[0];
            console.log(totalResult);
        } else if ($this.hasClass("m10000")) {
            totalResult += chargeMoney[1];
        } else if ($this.hasClass("m5000")) {
            totalResult += chargeMoney[2];
        } else if ($this.hasClass("m1000")) {
            totalResult += chargeMoney[3];
        } else if ($this.hasClass("m500")) {
            totalResult += chargeMoney[4];
        } else if ($this.hasClass("m100")) {
            totalResult += chargeMoney[5];
        };
        comma = totalResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#chargeBox").html(comma);
    });

    /* 계산하기버튼 실행 */
    let totalChange1 = "";
    let totalChange2 = "";
    let allChange = "";
    let allMoney1 = "";
    let allMoney2 = "";

    $("#payBox").click(function () {
        if ($("#totalBox").html() == '') {
            $(".xWindow").css("display", "block");
            $(".contentBox").prepend('<div class = "textPlus">음식을 선택해 주세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".xWindow").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        };
        if ($("#chargeBox").html() == '') {
            $(".xWindow").css("display", "block");
            $(".contentBox").prepend('<div class = "textPlus">금액을 지불해 주세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".xWindow").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        };
        if (totalResult < totalPrice) {
            $(".xWindow").css("display", "block");
            $(".contentBox").prepend('<div class = "textPlus">지불하신 금액이 부족합니다.</div>');
            $(".closeBtn").on("click", function () {
                $(".xWindow").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        };
    
        /* 거스름돈 숫자에 , */
        totalChange1 += $("#chargeBox").html();
        totalChange1 = totalChange1.replace(/,/g, "");

        totalChange2 += $("#totalBox").html();
        totalChange2 = totalChange2.replace(/,/g, "");

        allChange = parseInt(totalChange1) - parseInt(totalChange2);

        comma = allChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#firstResul").html(comma);
        totalChange1 = "";
        totalChange2 = "";

        /* 화폐계산 */
        chargeText[0] = parseInt(allChange / 50000);
        chargeText[1] = parseInt((allChange % 50000) / 10000);
        chargeText[2] = parseInt((allChange % 10000) / 5000);
        chargeText[3] = parseInt((allChange % 5000) / 1000);
        chargeText[4] = parseInt((allChange % 1000) / 500);
        chargeText[5] = parseInt((allChange % 500) / 100);
        chargeText[6] = parseInt((allChange % 100) / 50);
        chargeText[7] = parseInt((allChange % 50) / 10);
        allMoney1 += '<div class = "allText1">'
        allMoney1 += '5만원권: ' + chargeText[0] + '장' + '<br>';
        allMoney1 += '1만원권: ' + chargeText[1] + '장' + '<br>';
        allMoney1 += '5천원권: ' + chargeText[2] + '장' + '<br>';
        allMoney1 += '1천원권: ' + chargeText[3] + '장' + '<br>';
        allMoney1 += '</div>';
        allMoney2 += '<div class = "allText2">';
        allMoney2 += '500원 동전: ' + chargeText[4] + '개' + '<br>';
        allMoney2 += '100원 동전: ' + chargeText[5] + '개' + '<br>';
        allMoney2 += '</div>';
        $(".allText1").detach();
        $(".allText2").detach();
        $("#allMoney").prepend(allMoney1, allMoney2);
        allMoney1 = "";
        allMoney2 = "";
    });

    /*리셋버튼*/
    $('.clear-btn').on('click',function(){
        $.each(productArr, function(index,item){
            item.count=0;
        });
        totalPrice = 0;
        totalResult = 0;
        totalChange1 = "";
        totalChange2 = "";
        allChange = "";
        allMoney1 = "";
        allMoney2 = "";
        startCount = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        parseFloat($("#chargeBox").html(""));
        parseFloat($("#totalBox").html(""));
        parseFloat($("#firstResul").html(""));
        $('.listProduct').html('');
        $('.totalBox').html('');
        $('.chargeBox').html('');
        $('#firstResul').html('');
        $("#allMoney").html('');
        $(".numberBox1").html("");
        $(".numberBox2").html("");
        $(".numberBox3").html("");
        $(".numberBox4").html("");
        $(".numberBox5").html("");
        $(".numberBox6").html("");
        $(".numberBox7").html("");
        $(".numberBox8").html("");
        $(".numberBox9").html("");
    });
}