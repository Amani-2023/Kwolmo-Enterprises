// Basic front-end handling for forms (no backend). Save registration details to console and show alerts.
// NOTE: Replace with real backend / DB / email integration when ready.

document.addEventListener('DOMContentLoaded', () => {

    // Programme form
    const programmeForm = document.getElementById('programmeForm');
    if (programmeForm) {
        programmeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
                name: form.fullname.value.trim(),
                email: form.email.value.trim(),
                phone: form.phone.value.trim(),
                programme: form.programme.value,
                programmeMeta: form.programme.options[form.programme.selectedIndex].dataset || {},
                paymentPlan: form.paymentPlan.value,
                frequency: form.frequency.value,
                deposit: Number(form.deposit.value)
            };

            // Validate deposit reasonable: deposit must be > 0
            if (!data.deposit || data.deposit <= 0) {
                alert('Please enter a valid deposit amount.');
                return;
            }

            // Check installments constraints: min 2, max 3
            if (!['2', '3'].includes(data.paymentPlan)) {
                alert('Please select a valid payment plan (2 or 3 installments).');
                return;
            }

            console.log('Programme registration:', data);
            alert('Thank you — programme registration received. Please complete the deposit via M-Changa Paybill 891300 (Account: 62527) and keep your reference.');
            form.reset();
        });
    }

    // Membership
    const membershipForm = document.getElementById('membershipForm');
    if (membershipForm) {
        membershipForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
                name: form.fullname.value.trim(),
                email: form.email.value.trim(),
                phone: form.phone.value.trim(),
                membershipType: form.membershipType.value,
                membershipFee: form.membershipType.options[form.membershipType.selectedIndex].dataset.fee
            };
            console.log('Membership registration:', data);
            alert(`Membership received. Please pay the fee via M-Changa Paybill 891300 (Account: your name).`);
            form.reset();
        });
    }

    // Community registration
    const communityForm = document.getElementById('communityForm');
    if (communityForm) {
        communityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
                name: form.fullname.value.trim(),
                phone: form.phone.value.trim(),
                email: form.email.value.trim(),
                category: form.category.value,
                location: {
                    continent: form.continent.value.trim(),
                    country: form.country.value.trim(),
                    state: form.state.value.trim(),
                    county: form.county.value.trim(),
                    subcounty: form.subcounty.value.trim(),
                    ward: form.ward.value.trim(),
                    location: form.location.value.trim(),
                    sublocation: form.sublocation.value.trim(),
                    village: form.village.value.trim()
                }
            };
            console.log('Community registration:', data);
            alert('Community registration submitted. Our team will contact you for follow-up and coordination.');
            form.reset();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                message: form.message.value.trim()
            };
            console.log('Contact message:', data);
            alert('Thank you for your message. We will get back to you shortly.');
            form.reset();
        });
    }

});