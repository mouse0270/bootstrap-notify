// $(document).ready(function () {
    $.fn.cbn = function (var_message, var_type = 'info', update = 'no') {
        // alert('a');
        var var_title = '';
        var var_icon = '';
        var val_showProgressbar = false;
        var val_allow_dismiss = true;

        if (var_type == 'success') {
            var_title = 'Success!! ';
            var_icon = 'fa fa-check-circle-o';

        } else if (var_type == 'danger') {
            var_title = 'Error!! ';
            var_icon = 'fa fa-exclamation-circle';

        } else if (var_type == 'warning') {
            var_title = 'Warning!! ';
            var_icon = 'fa fa-exclamation-circle';
        } else if (var_type == 'loading') {
            var_type = 'info';
            var_title = 'Loading!! ';
            var_icon = 'fa fa-refresh fa-spin fa-fw';
            val_allow_dismiss: false,
            val_showProgressbar = true;
        } else {
            var_type = 'info';
            var_title = 'Message!! ';
            var_icon = 'fa fa-info-circle';
        }

        if(update=='no') {
            window.notify = $.notify({
                    // obj.message
                    // options
                    icon: var_icon,
                    title: var_title,
                    message: var_message,
                    /*
                    url: 'https://github.com/mouse0270/bootstrap-notify',
                    target: '_blank'
                    */
                },
                {
                    /* allow_dismiss: false, */
                    type: var_type,
                    z_index: 6001,
                    showProgressbar: val_showProgressbar,
                    allow_dismiss: val_allow_dismiss,
                    /*
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                    delay: 3000,
                    timer: 2000,
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },

                     */
                });
        }
        else {
            window.notify.update({type: var_type, icon: var_icon, title: var_title, message: var_message,});
        }
    };

// });

