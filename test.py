import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Download necessary NLTK data
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('wordnet')
nltk.download('stopwords')

# Define POS tags to remove
REMOVE_TAGS = {"MD", "CC", "DT"}  # Modals, conjunctions, determiners
REMOVE_CONJUNCTIONS = {"and", "or", "so", "because", "if", "while", "whereas"}  # Remove all conjunctions except contrast words
KEEP_CONTRAST_WORDS = {"but", "however", "yet", "although"}  # Keep these conjunctions

# Preprocessing function
def preprocess_text(text):
    tokens = word_tokenize(text.lower())  
    pos_tags = nltk.pos_tag(tokens)  

    print("\nPOS Tags Before Processing:")
    for word, tag in pos_tags:
        print(f"{word}: {tag}")  # Display POS tags before processing

    # Remove auxiliary verbs, determiners, and conjunctions (except contrast words)
    filtered_tokens = [
        word for word, tag in pos_tags 
        if tag not in REMOVE_TAGS and (word not in REMOVE_CONJUNCTIONS or word in KEEP_CONTRAST_WORDS)
    ]
    
    # Remove stopwords
    stop_words = set(stopwords.words("english"))
    filtered_tokens = [word for word in filtered_tokens if word not in stop_words]
    
    # Lemmatization
    lemmatizer = WordNetLemmatizer()
    lemmatized_tokens = [lemmatizer.lemmatize(word) for word in filtered_tokens]
    
    return lemmatized_tokens

# Convert to sign language grammar
def convert_to_sign_language(tokens):
    return " ".join([word.upper() for word in tokens])  # Convert words to uppercase for emphasis

# Get user input
text = input("Provide text: ")

# Process the text
processed_tokens = preprocess_text(text)
sign_language_friendly = convert_to_sign_language(processed_tokens)

# Output results
print("\nOriginal Text:", text)
print("Sign Language Friendly:", sign_language_friendly)
