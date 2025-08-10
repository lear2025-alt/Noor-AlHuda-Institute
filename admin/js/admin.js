document.addEventListener('DOMContentLoaded', function() {
    // تحديث التاريخ والوقت
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        document.getElementById('currentDateTime').textContent = now.toLocaleDateString('ar-SA', options);
    }
    
    updateDateTime();
    setInterval(updateDateTime, 60000);
    
    // تأثيرات العدادات
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
    // تأكيد قبل الحذف
    $('.btn-delete').click(function(e) {
        if(!confirm('هل أنت متأكد من أنك تريد الحذف؟ لا يمكن التراجع عن هذا الإجراء.')) {
            e.preventDefault();
        }
    });
    
    // تفعيل أدوات تلميح Bootstrap
    $('[data-bs-toggle="tooltip"]').tooltip();
});





// معالجة حذف الطالب
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', function() {
                if(confirm('هل أنت متأكد من حذف هذا الطالب؟ سيتم حذف جميع بياناته المرتبطة.')) {
                    const row = this.closest('tr');
                    row.style.opacity = '0.5';
                    // هنا يمكنك إضافة كود الحذف الفعلي
                    setTimeout(() => {
                        row.remove();
                        alert('تم حذف الطالب بنجاح');
                    }, 1000);
                }
            });
        });

        // معالجة إضافة طالب جديد
        document.getElementById('addStudentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود الإضافة الفعلية
            alert('تم إضافة الطالب بنجاح');
            $('#addStudentModal').modal('hide');
            this.reset();
        });
// يمكنك هنا إضافة الطالب الجديد للجدول دون الحاجة لإعادة تحميل الصفحة







// حفظ جميع الإعدادات
document.getElementById('saveSettings').addEventListener('click', function() {
    const settings = {
        theme: document.getElementById('theme').value,
        // بقية الإعدادات...
    };
    
    localStorage.setItem('appSettings', JSON.stringify(settings));
    alert('تم حفظ الإعدادات بنجاح');
});