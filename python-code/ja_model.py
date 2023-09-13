import pickle
import sys
import  sklearn


with open('models/gradient_boosting_Ja.pkl','rb') as f:
    Ja_model = pickle.load(f)
    
    print(Ja_model.predict([[sys.argv[1]]]))