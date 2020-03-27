Search.setIndex({docnames:["index","input_layer_reference","learning_algorithm_reference","modules","ranking_model_reference","ultra","ultra.input_layer","ultra.learning_algorithm","ultra.ranking_model","ultra.utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,nbsphinx:2,sphinx:56},filenames:["index.rst","input_layer_reference.rst","learning_algorithm_reference.rst","modules.rst","ranking_model_reference.rst","ultra.rst","ultra.input_layer.rst","ultra.learning_algorithm.rst","ultra.ranking_model.rst","ultra.utils.rst"],objects:{"":{ultra:[5,0,0,"-"]},"ultra.input_layer":{base_input_feed:[6,0,0,"-"],click_models:[6,0,0,"-"],click_simulation_feed:[6,0,0,"-"],deterministic_online_simulation_feed:[6,0,0,"-"],direct_label_feed:[6,0,0,"-"],interleaving_deterministic_online_simulation_feed:[6,0,0,"-"],list_available:[6,4,1,""],stochastic_online_simulation_feed:[6,0,0,"-"]},"ultra.input_layer.base_input_feed":{BaseInputFeed:[6,1,1,""]},"ultra.input_layer.base_input_feed.BaseInputFeed":{MAX_SAMPLE_ROUND_NUM:[6,2,1,""],__init__:[6,3,1,""],get_batch:[6,3,1,""],get_data_by_index:[6,3,1,""],get_next_batch:[6,3,1,""],preprocess_data:[6,3,1,""]},"ultra.input_layer.click_models":{CascadeModel:[6,1,1,""],ClickModel:[6,1,1,""],PositionBiasedModel:[6,1,1,""],UserBrowsingModel:[6,1,1,""],loadModelFromJson:[6,4,1,""],main:[6,4,1,""],test_initialization:[6,4,1,""],test_load_from_file:[6,4,1,""]},"ultra.input_layer.click_models.CascadeModel":{estimatePropensityWeightsForOneList:[6,3,1,""],getExamProb:[6,3,1,""],model_name:[6,3,1,""],sampleClick:[6,3,1,""],sampleClicksForOneList:[6,3,1,""],setExamProb:[6,3,1,""]},"ultra.input_layer.click_models.ClickModel":{__init__:[6,3,1,""],estimatePropensityWeightsForOneList:[6,3,1,""],getModelJson:[6,3,1,""],model_name:[6,3,1,""],sampleClicksForOneList:[6,3,1,""],setClickProb:[6,3,1,""],setExamProb:[6,3,1,""]},"ultra.input_layer.click_models.PositionBiasedModel":{estimatePropensityWeightsForOneList:[6,3,1,""],getExamProb:[6,3,1,""],model_name:[6,3,1,""],sampleClick:[6,3,1,""],sampleClicksForOneList:[6,3,1,""],setExamProb:[6,3,1,""]},"ultra.input_layer.click_models.UserBrowsingModel":{estimatePropensityWeightsForOneList:[6,3,1,""],getExamProb:[6,3,1,""],model_name:[6,3,1,""],sampleClick:[6,3,1,""],sampleClicksForOneList:[6,3,1,""],setExamProb:[6,3,1,""]},"ultra.input_layer.click_simulation_feed":{ClickSimulationFeed:[6,1,1,""]},"ultra.input_layer.click_simulation_feed.ClickSimulationFeed":{__init__:[6,3,1,""],get_batch:[6,3,1,""],get_data_by_index:[6,3,1,""],get_next_batch:[6,3,1,""],prepare_sim_clicks_with_index:[6,3,1,""]},"ultra.input_layer.deterministic_online_simulation_feed":{DeterministicOnlineSimulationFeed:[6,1,1,""]},"ultra.input_layer.deterministic_online_simulation_feed.DeterministicOnlineSimulationFeed":{__init__:[6,3,1,""],get_batch:[6,3,1,""],get_data_by_index:[6,3,1,""],get_next_batch:[6,3,1,""],prepare_true_labels_with_index:[6,3,1,""],simulate_clicks_online:[6,3,1,""]},"ultra.input_layer.direct_label_feed":{DirectLabelFeed:[6,1,1,""]},"ultra.input_layer.direct_label_feed.DirectLabelFeed":{__init__:[6,3,1,""],get_batch:[6,3,1,""],get_data_by_index:[6,3,1,""],get_next_batch:[6,3,1,""],prepare_true_labels_with_index:[6,3,1,""]},"ultra.input_layer.interleaving_deterministic_online_simulation_feed":{InterleavingDeterministicOnlineSimulationFeed:[6,1,1,""]},"ultra.input_layer.interleaving_deterministic_online_simulation_feed.InterleavingDeterministicOnlineSimulationFeed":{__init__:[6,3,1,""],get_batch:[6,3,1,""],get_data_by_index:[6,3,1,""],get_next_batch:[6,3,1,""],prepare_true_labels_with_index:[6,3,1,""],simulate_clicks_online:[6,3,1,""]},"ultra.input_layer.stochastic_online_simulation_feed":{StochasticOnlineSimulationFeed:[6,1,1,""]},"ultra.input_layer.stochastic_online_simulation_feed.StochasticOnlineSimulationFeed":{__init__:[6,3,1,""],get_batch:[6,3,1,""],get_data_by_index:[6,3,1,""],get_next_batch:[6,3,1,""],prepare_true_labels_with_index:[6,3,1,""],simulate_clicks_online:[6,3,1,""]},"ultra.learning_algorithm":{base_algorithm:[7,0,0,"-"],dbgd:[7,0,0,"-"],dbgd_interleave:[7,0,0,"-"],dla:[7,0,0,"-"],ipw_rank:[7,0,0,"-"],list_available:[7,4,1,""],navie_algorithm:[7,0,0,"-"],pairwise_debias:[7,0,0,"-"],pdgd:[7,0,0,"-"],regression_EM:[7,0,0,"-"]},"ultra.learning_algorithm.base_algorithm":{BaseAlgorithm:[7,1,1,""]},"ultra.learning_algorithm.base_algorithm.BaseAlgorithm":{PADDING_SCORE:[7,2,1,""],__init__:[7,3,1,""],get_ranking_scores:[7,3,1,""],get_ranking_scores_with_noise:[7,3,1,""],pairwise_cross_entropy_loss:[7,3,1,""],ranking_model:[7,3,1,""],remove_padding_for_metric_eval:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.dbgd":{DBGD:[7,1,1,""]},"ultra.learning_algorithm.dbgd.DBGD":{__init__:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.dbgd_interleave":{DBGDInterleave:[7,1,1,""]},"ultra.learning_algorithm.dbgd_interleave.DBGDInterleave":{__init__:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.dla":{DLA:[7,1,1,""],sigmoid_prob:[7,4,1,""]},"ultra.learning_algorithm.dla.DLA":{DenoisingNet:[7,3,1,""],__init__:[7,3,1,""],click_weighted_log_loss:[7,3,1,""],click_weighted_pairwise_loss:[7,3,1,""],click_weighted_softmax_cross_entropy_loss:[7,3,1,""],get_normalized_weights:[7,3,1,""],separate_gradient_update:[7,3,1,""],softmax_loss:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.ipw_rank":{IPWrank:[7,1,1,""],selu:[7,4,1,""]},"ultra.learning_algorithm.ipw_rank.IPWrank":{__init__:[7,3,1,""],click_weighted_pairwise_loss:[7,3,1,""],click_weighted_softmax_loss:[7,3,1,""],sigmoid_loss:[7,3,1,""],softmax_loss:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.navie_algorithm":{NavieAlgorithm:[7,1,1,""]},"ultra.learning_algorithm.navie_algorithm.NavieAlgorithm":{__init__:[7,3,1,""],pairwise_loss:[7,3,1,""],sigmoid_loss:[7,3,1,""],softmax_loss:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.pairwise_debias":{PairDebias:[7,1,1,""],get_bernoulli_sample:[7,4,1,""]},"ultra.learning_algorithm.pairwise_debias.PairDebias":{__init__:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.pdgd":{PDGD:[7,1,1,""]},"ultra.learning_algorithm.pdgd.PDGD":{__init__:[7,3,1,""],step:[7,3,1,""]},"ultra.learning_algorithm.regression_EM":{RegressionEM:[7,1,1,""],get_bernoulli_sample:[7,4,1,""]},"ultra.learning_algorithm.regression_EM.RegressionEM":{__init__:[7,3,1,""],step:[7,3,1,""]},"ultra.ranking_model":{base_ranking_model:[8,0,0,"-"],dnn:[8,0,0,"-"],linear:[8,0,0,"-"],list_available:[8,4,1,""]},"ultra.ranking_model.base_ranking_model":{ActivationFunctions:[8,1,1,""],BaseRankingModel:[8,1,1,""],selu:[8,4,1,""]},"ultra.ranking_model.base_ranking_model.ActivationFunctions":{ELU:[8,2,1,""],RELU:[8,2,1,""],SELU:[8,2,1,""],SIGMOID:[8,2,1,""],TANH:[8,2,1,""]},"ultra.ranking_model.base_ranking_model.BaseRankingModel":{ACT_FUNC_DIC:[8,2,1,""],__init__:[8,3,1,""],build:[8,3,1,""],build_with_random_noise:[8,3,1,""]},"ultra.ranking_model.dnn":{DNN:[8,1,1,""]},"ultra.ranking_model.dnn.DNN":{__init__:[8,3,1,""],build:[8,3,1,""],build_with_random_noise:[8,3,1,""]},"ultra.ranking_model.linear":{Linear:[8,1,1,""]},"ultra.ranking_model.linear.Linear":{__init__:[8,3,1,""],build:[8,3,1,""],build_with_random_noise:[8,3,1,""]},"ultra.utils":{data_utils:[9,0,0,"-"],hparams:[9,0,0,"-"],metrics:[9,0,0,"-"],propensity_estimator:[9,0,0,"-"],sys_tools:[9,0,0,"-"],team_draft_interleave:[9,0,0,"-"]},"ultra.utils.data_utils":{Raw_data:[9,1,1,""],generate_ranklist:[9,4,1,""],generate_ranklist_by_scores:[9,4,1,""],merge_TFSummary:[9,4,1,""],output_ranklist:[9,4,1,""],parse_TFSummary_from_bytes:[9,4,1,""],read_data:[9,4,1,""]},"ultra.utils.data_utils.Raw_data":{__init__:[9,3,1,""],load_basic_data_information:[9,3,1,""],load_data_in_ULTRA_format:[9,3,1,""],load_data_in_libsvm_format:[9,3,1,""],pad:[9,3,1,""],remove_invalid_data:[9,3,1,""]},"ultra.utils.hparams":{HParams:[9,1,1,""],parse_values:[9,4,1,""]},"ultra.utils.hparams.HParams":{__init__:[9,3,1,""],add_hparam:[9,3,1,""],from_proto:[9,3,1,""],get:[9,3,1,""],get_model_structure:[9,3,1,""],override_from_dict:[9,3,1,""],parse:[9,3,1,""],parse_json:[9,3,1,""],set_from_map:[9,3,1,""],set_hparam:[9,3,1,""],set_model_structure:[9,3,1,""],to_json:[9,3,1,""],values:[9,3,1,""]},"ultra.utils.metrics":{RankingMetricKey:[9,1,1,""],average_relevance_position:[9,4,1,""],discounted_cumulative_gain:[9,4,1,""],expected_reciprocal_rank:[9,4,1,""],make_ranking_metric_fn:[9,4,1,""],mean_average_precision:[9,4,1,""],mean_reciprocal_rank:[9,4,1,""],normalized_discounted_cumulative_gain:[9,4,1,""],ordered_pair_accuracy:[9,4,1,""],precision:[9,4,1,""]},"ultra.utils.metrics.RankingMetricKey":{ARP:[9,2,1,""],DCG:[9,2,1,""],ERR:[9,2,1,""],MAP:[9,2,1,""],MAX_LABEL:[9,2,1,""],MRR:[9,2,1,""],NDCG:[9,2,1,""],ORDERED_PAIR_ACCURACY:[9,2,1,""],PRECISION:[9,2,1,""]},"ultra.utils.propensity_estimator":{BasicPropensityEstimator:[9,1,1,""],OraclePropensityEstimator:[9,1,1,""],RandomizedPropensityEstimator:[9,1,1,""],main:[9,4,1,""]},"ultra.utils.propensity_estimator.BasicPropensityEstimator":{__init__:[9,3,1,""],getPropensityForOneList:[9,3,1,""],loadEstimatorFromFile:[9,3,1,""],outputEstimatorToFile:[9,3,1,""]},"ultra.utils.propensity_estimator.OraclePropensityEstimator":{__init__:[9,3,1,""],getPropensityForOneList:[9,3,1,""],loadEstimatorFromFile:[9,3,1,""],outputEstimatorToFile:[9,3,1,""]},"ultra.utils.propensity_estimator.RandomizedPropensityEstimator":{__init__:[9,3,1,""],estimateParametersFromModel:[9,3,1,""],loadEstimatorFromFile:[9,3,1,""],outputEstimatorToFile:[9,3,1,""]},"ultra.utils.sys_tools":{create_object:[9,4,1,""],find_class:[9,4,1,""],list_recursive_concrete_subclasses:[9,4,1,""]},"ultra.utils.team_draft_interleave":{TeamDraftInterleaving:[9,1,1,""]},"ultra.utils.team_draft_interleave.TeamDraftInterleaving":{__init__:[9,3,1,""],infer_winner:[9,3,1,""],interleave:[9,3,1,""],next_index_to_add:[9,3,1,""]},ultra:{input_layer:[6,0,0,"-"],learning_algorithm:[7,0,0,"-"],ranking_model:[8,0,0,"-"],utils:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"27th":[2,7],"54e89":9,"abstract":[6,7,8],"boolean":9,"capp\u00e9":[2,7],"case":[6,9],"class":[1,2,4,6,7,8,9],"default":9,"export":9,"float":[8,9],"function":[6,8,9],"import":9,"int":[7,9],"new":9,"return":[6,7,8,9],"static":[6,9],"true":[1,6,7,9],"while":6,For:9,That:9,The:[2,6,7,8,9],There:0,Use:9,__init__:[6,7,8,9],_name_:9,abc:[4,6,7,8],about:[6,7],abov:9,access:9,accord:[7,9],accur:[6,9],accuraci:9,acm:[2,7],acronym:9,act_func_d:8,activ:[8,9],activationfunct:8,add:[8,9],add_argu:9,add_hparam:9,added:9,adith:[2,7],advanc:8,algorithm:[0,7],all:[0,6,7,8,9],allow:9,also:[0,9],alwai:0,ani:[0,9],annot:[1,6],api:[6,7,8],appear:9,appli:8,arg:9,argpars:9,argument:9,argumentpars:9,arp:9,arr:9,arrai:9,articl:9,assign:9,attribut:9,avail:9,averag:9,average_click_posit:9,average_relevance_posit:9,average_relevance_rank:9,avoid:9,backward:7,bandit:[2,7],bar_1:9,base:[1,2,6,7,8,9],base_algorithm:[3,5],base_input_fe:[3,5],base_ranking_model:[3,5],basealgorithm:7,baseinputfe:6,baserankingmodel:8,basic:[6,7,8,9],basicmodel:6,basicpropensityestim:9,batch:[6,9],batch_siz:[6,7,9],been:9,befor:6,benderski:[2,7],bernoulli:7,bia:[2,7],bias:[2,7],binari:[7,9],bool:[6,7,8,9],both:[1,6,9],bracket:9,bruce:[2,6,7],buffer:9,build:[6,7,8,9],build_with_random_nois:8,call:[6,9],can:[8,9],candid:9,cannot:9,cascademodel:6,charact:9,check_valid:6,cheng:[2,6,7],class_str:9,click:[1,6,7,9],click_list:[6,9],click_model:[3,5,9],click_simulation_fe:[3,5],click_weighted_log_loss:7,click_weighted_pairwise_loss:7,click_weighted_softmax_cross_entropy_loss:7,click_weighted_softmax_loss:7,clickmodel:[6,9],clicksimulationfe:[0,6],code:0,collect:6,com:9,comma:9,command:9,comment:0,compact:9,compar:[0,9],compat:9,comput:[7,9],concret:9,conduct:7,confer:[2,7],conform:9,confus:9,consid:[7,9],consist:7,construct:[6,7,9],constructor:9,contain:[6,7,8,9],content:[0,3],contribut:0,correctedli:9,correctli:9,correspond:[7,9],creat:[4,6,7,8,9],create_object:9,creation:6,croft:[2,6,7],cross:9,cumul:9,current:[6,9],cutoff:9,data:[1,2,6,7,9],data_path:9,data_set:[6,7,9],data_util:[3,5],dataset:[6,7,9],dbgd:[0,3,5],dbgd_interleav:[3,5],dbgdinterleav:[0,7],dcg:9,debias:[2,7],debug:6,decoder_input:6,def:9,defin:9,denoisingnet:7,denot:7,depend:9,deprec:9,descent:[0,2,7],describ:9,descript:[0,9],deseri:9,design:[0,7,8],detail:9,determin:9,deterministic_online_simulation_fe:[3,5],deterministiconlinesimulationfe:[0,6],develop:0,dict:6,dictionari:[6,7,9],did:9,differ:9,differenti:[2,7],direct:9,direct_label_fe:[3,5],directlabelfe:[0,6],directli:[1,2,6,7,9],directori:9,discount:9,discounted_cumulative_gain:9,distinguish:9,distribut:7,dla:[0,3,5],dlcm:0,dnn:[0,3,5],doc:9,docid:7,docid_input:6,document:[1,6,7,8,9],donald:[2,7],dot:9,downloadsummari:9,dual:[2,7],duel:[2,7],dure:9,each:[1,6,7,8,9],easili:9,either:9,element:[7,8,9],eleventh:[2,7],els:9,elu:8,empti:9,enclos:9,encod:9,entropi:7,environ:6,equat:9,eric:[2,7],err:9,estim:[2,6,7,9],estimateparametersfrommodel:9,estimatepropensityweightsforonelist:6,eta:6,evalu:9,everi:9,exampl:[7,9],exclud:9,exist:9,exp_set:[6,7],expect:[2,7,9],expected_reciprocal_rank:9,experi:[1,6],experiment:9,exponenti:8,facilit:0,factori:9,fals:[6,7,8,9],featur:[8,9],feature_s:9,feed:[1,2,6,7],feedback:[2,7],few:9,file:9,file_nam:9,file_prefix:9,find:9,find_class:9,first:9,flag:[7,8,9],focu:0,follow:[2,6,7,9],foo:9,format:[6,9],former:9,forward:7,forward_onli:7,found:[8,9],from:[0,6,9],from_proto:9,gain:9,gener:[6,9],generate_ranklist:9,generate_ranklist_by_scor:9,get:[6,9],get_batch:6,get_bernoulli_sampl:7,get_data_by_index:6,get_model_structur:9,get_next_batch:6,get_normalized_weight:7,get_ranking_scor:7,get_ranking_scores_with_nois:7,getexamprob:6,getmodeljson:6,getpropensityforonelist:9,give:9,given:7,going:6,golbandi:[2,7],grade:9,gradient:[0,2,7],gsf:0,guo:[2,6,7],hang:[2,7],happi:0,harri:[2,7],has:[6,9],have:[0,7,9],head:9,help:[6,9],helper:4,henc:9,here:[6,9],hidden:9,high:9,histor:9,hochreit:8,hold:9,how:[8,9],hparam:[3,5],hparam_def:9,hparam_pb2:9,hparam_str:6,hparamdef:9,hparams_str:8,http:9,human:[1,6],hyper:[0,6,8,9],hyperparamet:9,icml:[2,7],ids:[7,9],idx:9,ignor:[6,9],ignore_unknown_hyperparamet:9,implement:[1,2,6,7,8,9],import_scop:9,includ:9,indent:9,index:[0,6,9],indic:[7,8,9],infer:9,infer_winn:9,info_map:6,inform:[2,6,7,8,9],inherit:4,initi:[6,9],initial_list:9,initial_list_length:9,initial_scor:9,input:[0,2,6,7,9],input_docid:7,input_fe:[6,7],input_id_list:7,input_lay:[3,5],input_list:8,inr:9,insert:9,instanc:[8,9],integ:9,intend:9,inter_n:9,inter_result:9,interact:[2,7],interfac:0,interleav:9,interleaving_deterministic_online_simulation_fe:[3,5],interleavingdeterministiconlinesimulationfe:[0,6],intern:[2,7],invalid:9,invers:[2,7],ipw_rank:[3,5],ipwrank:[0,7],is_train:[7,8],item:9,item_separ:9,iter:6,jiafeng:[2,6,7],joachim:[2,7],journal:[2,7],json:9,kei:[8,9],kepe:[2,6,7],key_separ:9,keyword:9,klambauer:8,knowledg:[2,7],kwarg:9,l_i:9,l_j:9,label:[1,2,6,7,9],label_list:6,lambdamart:[2,7],last_click_rank:6,latent:[2,7],later:6,latter:9,layer:[0,2,6,7,9],learn:[0,1,6,7,8,9],learning_algorithm:[3,5],learning_r:9,length:[6,9],less:9,letor_featur:6,level:9,libsvm:9,line:9,linear:[0,3,5],list:[6,7,8,9],list_avail:[6,7,8],list_recursive_concrete_subclass:9,list_siz:[7,9],listwis:[7,9],liu:9,load:9,load_basic_data_inform:9,load_data_in_libsvm_format:9,load_data_in_ultra_format:9,loadestimatorfromfil:9,loadmodelfromjson:6,logic:6,logit:7,loss:7,low:9,luo:[2,6,7],maarten:[2,7],main:[6,9],major:6,make:9,make_ranking_metric_fn:9,manag:[2,7],mani:9,map:9,marc:[2,7],match:9,matchzoo:0,max_label:9,max_sample_round_num:6,maxim:[2,7],maximum:9,mayr:8,mean:[7,9],mean_average_precis:9,mean_reciprocal_rank:9,meant:9,member:9,merge_tfsummari:9,method:9,methodolog:[2,7],metric:[3,5],metric_kei:9,metzler:[2,7],michael:[2,7],mine:[2,7],mismatch:9,mode:[7,8],model:[0,1,2,6,7,8,9],model_desc:6,model_nam:6,model_output:7,model_structur:9,modelstructur:9,modul:[0,3],more:[2,6,7,8,9],most:9,moulin:[2,7],mrr:9,much:8,multidimension:9,multipl:9,must:[6,7,9],my_program:9,nadav:[2,7],najork:[2,7],name:[7,9],navi:[2,7],navie_algorithm:[3,5],naviealgorithm:[0,7],ndcg:9,need:[6,7,8],neg:[7,9],neg_click_prob:6,neg_scor:7,net:9,network:8,neural:[8,9],newlin:9,next:6,next_index_to_add:9,nois:[7,8],noise_r:8,non:9,none:[6,7,9],normal:[8,9],normalized_discounted_cumulative_gain:9,notat:9,note:9,nowpublish:9,num_hidden_unit:9,number:[0,7,8,9],object:[6,8,9],olivi:[2,7],one:[6,9],onli:[7,9],onlin:[0,1,2,6,7,8],oosterhui:[2,7],ops:9,optim:[0,2,7],option:9,oraclepropensityestim:9,order:9,ordered_pair_accuraci:9,origin:9,otherwis:9,our:0,output:[7,9],output_path:9,output_ranklist:9,outputestimatortofil:9,overrid:9,override_from_dict:9,packag:[0,3],pad:9,pad_tail:9,padding_scor:7,page:0,pair:[1,6,9],pairdebia:[0,7],pairwis:[2,7],pairwise_cross_entropy_loss:7,pairwise_debia:[3,5],pairwise_loss:7,pairwisedebia:0,paper:[2,6,7],param:9,paramet:[0,6,7,8,9],pars:9,parsabl:9,parse_arg:9,parse_json:9,parse_tfsummary_from_byt:9,parse_valu:9,parser:9,particular:[2,7],pass:9,path:9,pdgd:[0,3,5],peng:[2,7],per:9,percentag:9,person:[2,7],point:9,pointwis:7,pos_click_prob:6,pos_scor:7,posit:[2,6,7,9],positionbiasedmodel:6,possibl:9,precis:9,predefin:[1,6],predict:[7,9],prefix:9,prepar:6,prepare_sim_clicks_with_index:6,prepare_true_labels_with_index:6,preprocess:6,preprocess_data:6,pretti:9,print:9,prob:7,probabl:7,problem:[2,7,9],proceed:[2,6,7],process:[6,8,9],produc:8,program:9,propens:[2,6,7,9],propensity_estim:[3,5],propensity_weight:[7,9],proper:6,properti:6,protocol:9,provid:[4,9],python:9,qid:9,qid_list_map:9,qingyao:[2,6,7],queri:[1,6,9],rais:9,random:[6,7,8],randomizedpropensityestim:9,rank:[0,1,2,6,7,8,9],rank_cut:9,rank_list_s:9,ranking_model:[3,5,7],rankingmetrickei:9,rate:9,raw:9,raw_data:[6,7,9],read:9,read_data:9,receiv:0,reciproc:9,recurs:9,refer:0,regress:[0,2,7],regression_em:[3,5],regressionem:[0,7],relat:7,relev:[1,6,7,9],relevance_grading_num:6,relevance_label:6,relu:[8,9],remov:9,remove_invalid_data:9,remove_padding_for_metric_ev:7,removed_feature_id:9,repres:9,represent:9,requir:9,rerank:[6,9],rerank_list:9,rerank_scor:9,reserv:9,result:9,retriev:[2,7,9],rijk:[2,7],root:9,royal:[2,7],run:[7,8],rvalu:9,s_i:9,s_j:9,said:9,same:[7,9],sampl:7,sampleclick:6,sampleclicksforonelist:6,scalar:9,scale:8,schnahel:[2,7],scope:7,score:[7,8,9],scratch:9,search:[0,2,7],see:[2,6,7,9],select:[2,7,9],self:[6,8,9],selu:[7,8],separ:9,separate_gradient_upd:7,sequenc:9,seri:[2,7],serial:9,session:[6,7],set:[6,7,8,9],set_from_map:9,set_hparam:9,set_model_structur:9,setclickprob:6,setexamprob:6,shape:[7,9],share:0,shorter:9,should:9,sigir:[2,6,7],sigmoid:[7,8],sigmoid_loss:7,sigmoid_prob:7,signatur:[6,9],simul:[1,6,9],simulate_clicks_onlin:6,singl:[6,7,9],size:[6,7,9],societi:[2,7],softmax:7,softmax_loss:7,some:6,sort:9,sort_kei:9,space:9,specif:[6,7],specifi:[6,8,9],squar:9,standard:4,statist:[2,7],step:[6,7],stochastic_online_simulation_fe:[3,5],stochasticonlinesimulationfe:[0,6],str:9,string:[7,8,9],subclass:9,submodul:[3,5],subpackag:[0,3],successfulli:9,suggest:0,summari:7,summary_byt:9,summary_list:9,support:[0,9],swaminathan:[2,7],syntax:9,sys_tool:[3,5],system:[2,7,8],tail:9,take:9,tanh:[8,9],target_weight:6,team_draft_interleav:[3,5],teamdraftinterleav:9,tensor:[7,8,9],tensorflow:[6,7],test:[2,7,9],test_initi:6,test_load_from_fil:6,text:9,than:9,thei:9,them:9,thi:[1,2,6,7,9],thorsten:[2,7],time:9,to_json:9,tobia:[2,7],toolkit:0,top:[7,9],topn:9,train:[2,6,7,8,9],trec:9,trial:9,tripl:[6,7],tupl:9,two:9,type:[6,7,8,9],type_map:9,typic:[6,9],unbias:[0,1,2,6,7],unifi:0,unit:[8,9],unknown:9,unterthin:8,usag:9,use:[2,6,7,9],use_non_clicked_data:[6,9],used:[6,7,8,9],user:[0,9],userbrowsingmodel:6,using:[4,9],util:[3,5],valid:[6,9],valu:[7,8,9],valueerror:9,values_dict:9,values_json:9,values_map:9,variabl:7,vector:[6,9],verifi:9,wai:4,wang:[2,7],web:[2,7],weight:[2,7,9],when:9,where:9,whether:[7,8,9],which:[6,7,9],wide:[2,7],without:7,work:9,world:[2,7],would:9,wsdm:[2,7],www:9,xuanhui:[2,7],yang:[2,7],yisong:[2,7],you:9,yue:[2,7],zero:9,ziniu:[2,7]},titles:["Welcome to ULTRA\u2019s documentation!","Input Layer Reference","Learning Algorithm Reference","ultra","Ranking Model Reference","ultra package","ultra.input_layer package","ultra.learning_algorithm package","ultra.ranking_model package","ultra.utils package"],titleterms:{algorithm:2,base_algorithm:7,base_input_fe:6,base_ranking_model:8,click_model:6,click_simulation_fe:6,clicksimulationfe:1,content:[5,6,7,8,9],data_util:9,dbgd:[2,7],dbgd_interleav:7,dbgdinterleav:2,descript:[1,2,4],deterministic_online_simulation_fe:6,deterministiconlinesimulationfe:1,direct_label_fe:6,directlabelfe:1,dla:[2,7],dnn:[4,8],document:0,hparam:9,hyper:[1,2,4],indic:0,input:1,input_lay:6,interleaving_deterministic_online_simulation_fe:6,interleavingdeterministiconlinesimulationfe:1,ipw_rank:7,ipwrank:2,layer:1,learn:2,learning_algorithm:7,linear:[4,8],metric:9,model:4,modul:[5,6,7,8,9],navie_algorithm:7,naviealgorithm:2,packag:[5,6,7,8,9],pairdebia:2,pairwise_debia:7,paramet:[1,2,4],pdgd:[2,7],propensity_estim:9,rank:4,ranking_model:8,refer:[1,2,4],regression_em:7,regressionem:2,stochastic_online_simulation_fe:6,stochasticonlinesimulationfe:1,submodul:[6,7,8,9],subpackag:5,sys_tool:9,tabl:0,team_draft_interleav:9,ultra:[0,3,5,6,7,8,9],util:9,welcom:0}})