from langchain_google_genai import ChatGoogleGenerativeAI

model = ChatGoogleGenerativeAI(model="gemini-pro", api_key="GOOGLE_API_KEY")

response = model.invoke("Explain LangChain in simple terms.")

print(response.content)
