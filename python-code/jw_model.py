import pickle
import sys
import  sklearn

with open('models/gradient_boosting_Jw.pkl','rb') as f:
        Jw_model = pickle.load(f)
        print(Jw_model.predict([[sys.argv[1]]]))

