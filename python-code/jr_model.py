import pickle
import sys
# import  sklearn


with open('models/Decision_tree_regressor_Jr.pkl','rb') as f:
        Jr_model = pickle.load(f)
        print(Jr_model.predict([[sys.argv[1]]]))
