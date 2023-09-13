import pickle
import sys
# import  sklearn


with open('models/extra_tree_srf.pkl','rb') as f:
        srf_model = pickle.load(f)
        print(srf_model.predict([[sys.argv[1]]]))


