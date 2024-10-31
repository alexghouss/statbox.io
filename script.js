// Supabase client initialization
const supabaseUrl = "https://kuxluuxlrapceehvnkcp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1eGx1dXhscmFwY2VlaHZua2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjcyOTMsImV4cCI6MjA0MzQ0MzI5M30.0V0iv6M-4BxowdxqXRr-MsCkOCOzBHj0dxsH2y-XqbU";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    if (showSignup && showLogin && loginForm && signupForm) {
        showSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });

        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    // Sign-up form submission
    const signUpForm = document.getElementById("signUpForm");
    if (signUpForm) {
        signUpForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Gather form data
            const name = document.getElementById("name").value;
            const age = parseInt(document.getElementById("age").value);
            const height = document.getElementById("height").value;
            const preferredHand = document.getElementById("preferred-hand").value;
            const preferredFoot = document.getElementById("preferred-foot").value;
            const country = document.getElementById("country").value;

            // Insert data into Supabase users table
            const { data, error } = await supabase.from("users").insert([
                { name, age, height, preferred_hand: preferredHand, preferred_foot: preferredFoot, country }
            ]);

            if (error) {
                console.error("Error inserting data:", error.message);
                alert("There was an error saving your profile. Please try again.");
            } else {
                console.log("User registered:", data);
                alert("Sign-up successful!");
                signUpForm.reset();
            }
        });
    }
});
