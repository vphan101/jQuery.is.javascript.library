$(function(){

    var $orders= $('#orders');

    $.ajax({
        type: 'GET',
        url: '/api/orders',
        success: function(orders) {
            console.log('success', data);
            $.each(orders, function(i, order) {
                $.orders.append('<li>name: '+ order.name +', drink: ' +order.drink + '<li>');
            });
        }
    });
});