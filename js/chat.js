// ===============================
// NEXORA AI Chat System V4
// ===============================

let chatHistory = [];

function getReply(message) {

    const text = message.toLowerCase();

    // Greetings
    if (
        knowledge.greetings.includes(text)
    ) {
        return "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh. Barka da zuwa NEXORA AI.";
    }

    // Python
    if (text.includes("python")) {
        return knowledge.python;
    }

    // HTML
    if (text.includes("html")) {
        return knowledge.html;
    }

    // CSS
    if (text.includes("css")) {
        return knowledge.css;
    }

    // JavaScript
    if (
        text.includes("javascript") ||
        text.includes("js")
    ) {
        return knowledge.javascript;
    }

    // AI
    if (
        text.includes("artificial intelligence") ||
        text.includes("ai")
    ) {
        return knowledge.ai;
    }

    // GitHub
    if (text.includes("github")) {
        return knowledge.github;
    }

    // English
    if (
        text.includes("english") ||
        text.includes("turanci")
    ) {
        return knowledge.english;
    }

    // NEXORA
    if (text.includes("nexora")) {
        return knowledge.nexora;
    }

    // Founder
    if (text.includes("founder")) {
        return knowledge.founder;
    }

    // Mission
    if (text.includes("mission")) {
        return knowledge.mission;
    }

    // Motto
    if (text.includes("motto")) {
        return knowledge.motto;
    }

    return "Ban san amsar wannan ba tukuna. Amma zan ci gaba da koyo.";
}
